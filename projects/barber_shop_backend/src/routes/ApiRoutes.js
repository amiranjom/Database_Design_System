const express = require('express')
const session = require('express-session')

const {barberSignup, login ,deleteAccount ,barberProfile, updateSchedule ,barberScheduleInit, getLocation, addBarberType} = require('../db_Fetch/barber')

const router = express.Router()

router.use(session({
    secret: "cookie-code",
    resave: true,
    saveUninitialized: true,
    cookie: {httpOnly: false, maxAge: 24 * 60 * 60 * 1000 }
}))


router.post('/barber-signup', async (req,res)=>{
    try{
    let result = await barberSignup(req.body);
    req.session.barberEmail = req.body.email;
    res.json(result)
    }catch(e){
        res.json(e)
    }
})

router.post('/barber-schedule-init' , async (req,res) => {
    try{
        const email = req.session.barberEmail;
    req.session.type = req.body.barberType
    let result = await barberScheduleInit(req.body,email)
    console.log(req.session)
    //TODO Function check the type and add to according db table.
    await addBarberType(req.body,email)
    res.send(result)
    }catch(e){
        console.log(e)
    }
    
})

router.get('/store-locations', async (req,res) => {
    let result = await getLocation();
    res.send(result)
})

router.get('/barber-profile', async (req,res) => {
    const email = req.session.barberEmail;
    const type = req.session.type
    let result = await barberProfile(email,type)
    res.send(result)
})


router.post('/login', async (req,res) => {
    try{
    let result = await login(req.body)
    req.session.barberEmail = req.body.email
    req.session.type = req.body.userType
    console.log(req.session)
    res.send(result)
    }catch(e){
        res.send("Wrong Password")
    }
})

router.post('/update-schedule',async(req,res) => {
   try{
    await updateSchedule(req.body)
    res.send("Ok")
   }catch(e){
    console.log(e)
   }
})


router.post('/delete-account', async(req,res) => {
    try{
        await deleteAccount(req.body)
        req.session.destroy()
        res.send("Deleted")
    }catch(e){
        console.log(e)
    }
})

module.exports = router;