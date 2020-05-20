var express = require('express')
var logger = require('morgan');
var apiRoutes = require('./routes/ApiRoutes')
var path = require('path')
var app = express();
const port = 8000

app.use(express.static(path.join(__dirname,'/build')));
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.use('/api', apiRoutes)


app.get('/test', (req,res) => {
    res.send("OK")
})


while (true){
    //1 insert into student (Grab the Payload)
        //FirstNAme
        //LastName
        //Password
        //Call the method for inserting (info) Query -> comeback and success show the menu again
    //2 search courses
    //3 updating courses
}





app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'/build/index.html'));
})

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });




app.listen(port, () => console.log(`Listening on port ${port}`))





module.exports = app;