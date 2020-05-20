const mysql = require('mysql')
const bcrypt = require('bcryptjs')
 
const initConnect = () => {
    return(
    mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: 'freshfade'
    
    })
)}


const barberSignup =  (info) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                let sql = "insert into barber (email,firstName,lastName,password) values ?";
                let test = `insert into barber (email,firstName) values ('${info.email}', 'sd', 'das', 'sd');`
                let password = await bcrypt.hash(info.password, 1)
                let value = [[info.email,info.firstName,info.lastName,password]];
                connection.query(test,(error,result) => {
                    if(error) {
                        print(error)
                        reject({error: "Username Taken"})
                    }
                    else {
                        connection.end()
                        resolve({success: true})
                    }
                })
            }
        })        
    })
}

const barberScheduleInit = (info,email) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                let sql = "insert into schedule (barberEmail,days,times) values ?";
                let value = [[email,info.days.toString(),info.time]];
                connection.query(sql,[value],(error,result) => {
                    if(error) {
                        reject({error: "Fill Out All The Parts"})
                    }
                    else {
                        connection.end()
                        resolve({success: true})
                    }
                })
            }
        })        
    })
}

const getLocation = () => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                let sql = "select * from location";
                connection.query(sql,(error,result) => {
                    if(error) {
                        reject({Error: "error"})
                    }
                    else {
                        connection.end()
                        resolve(result)
                    }
                })
            }
        })        
    })
}




const searchResult = (info) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
               
                let sql = `select * from barber join schedule on barber.firstName like "${info.searchValue}%" and schedule.barberEmail = barber.email;`;
                connection.query(sql,(error,result) => {
                    if(error) {
                        console.log(error)
                        reject({Error: "error"})
                    }
                    else {
                        connection.end()
                        resolve(result)
                    }
                })
            }
        })        
    })
}












const deleteAccount = (info) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                //DELETE FROM `freshfade`.`barber` WHERE (`email` = 'kksksk@acsa.com');

                let sql = `delete from barber where email='${info.email}'`;
                connection.query(sql,(error,result) => {
                    if(error) {
                        console.log(error)
                        reject({Error: "error"})
                    }
                    else {
                        connection.end()
                        resolve(result)
                    }
                })
            }
        })        
    })
}



const updateSchedule = (info) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                //UPDATE schedule SET days = 'Monday,Saturday,Sunday', times = '9-19' WHERE (barberEmail = 'ada@asdaa.com');
                let sql = `UPDATE schedule SET days = '${info.days.toString()}', times = '${info.time}' WHERE (barberEmail = '${info.email}')`;
                connection.query(sql,(error,result) => {
                    if(error) {
                        console.log(error)
                        reject({Error: "error"})
                    }
                    else {
                        connection.end()
                        resolve(result)
                    }
                })
            }
        })        
    })
}




const addBarberType = (info,email) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                if(info.barberType === "storeworker"){
                    
                let sql = "insert into storeworker (barberEmail,locationId) values ?";
                let value = [[email,info.locationId]]
                connection.query(sql,[value],(error,result) => {
                    if(error) {
                        reject({Error: "error"})
                    }
                    else {
                        connection.end()
                        resolve(result)
                    }
                })
                    
                }else{

                    let sql = "insert into travelworker (barberEmail,rangeMile) values ?";
                    let value = [[email,50]]
                    connection.query(sql,[value],(error,result) => {
                        if(error) {
                            reject({Error: "error"})
                        }
                        else {
                            connection.end()
                            resolve(result)
                        }
                    })
                }
            }
        })        
    })
}


const barberProfile = (email,type) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                if(type === "storeworker"){
                    let sql = `select * from barber join schedule on barber.email = "${email}" and schedule.barberEmail = barber.email join storeworker on storeworker.barberEmail = barber.email join location on location.id = storeworker.locationId`;
                //select * from barber join schedule on barber.email="rkisog@yahoo.com" and schedule.barberEmail = barber.email join storeworker on storeworker.barberEmail = barber.email join location on location.id = storeworker.locationId
                connection.query(sql,(error,result) => {
                    if(error) {
                        reject({Error: error})
                    }
                    else {
                        connection.end()
                        resolve(result)
                    }
                })
                }else{
                    let sql = `select * from barber join schedule on barber.email = "${email}" and schedule.barberEmail = barber.email join travelworker on travelworker.barberEmail = barber.email`;
                    //select * from barber join schedule on barber.email="rkisog@yahoo.com" and schedule.barberEmail = barber.email join storeworker on storeworker.barberEmail = barber.email join location on location.id = storeworker.locationId
                    connection.query(sql,(error,result) => {
                        if(error) {
                            reject({Error: error})
                        }
                        else {
                            connection.end()
                            resolve(result)
                        }
                    })  
                }
                
            }
        })        
    })
}

const login = (info) => {
    return new Promise((resolve,reject) => {
        let connection = initConnect()
        connection.connect(async (e) => {
            if(e) {
                console.log(e)
                reject({Error: e})}

            else {
                //UPDATE schedule SET days = 'Monday,Saturday,Sunday', times = '9-19' WHERE (barberEmail = 'ada@asdaa.com');
                let sql = `select password from barber where email='${info.email}'`;
                connection.query(sql, async (error,result) => {
                    if(error) {
                        console.log(error)
                        reject({Error: "error"})
                    }
                    else {
                        connection.end()
                        console.log(info.password)
                        const match = await bcrypt.compare(info.password,result[0].password)
                        if(match){
                            
                            resolve({true: "Password Correct"})
                        }else{
                            reject("Wrong Password")
                        }
                        
                    }
                })
            }
        })        
    })
}





module.exports.barberSignup = barberSignup;

module.exports.getLocation = getLocation;

module.exports.barberScheduleInit = barberScheduleInit;

module.exports.addBarberType = addBarberType;

module.exports.barberProfile = barberProfile;

module.exports.updateSchedule = updateSchedule;

module.exports.deleteAccount = deleteAccount;
module.exports.login = login;
module.exports.searchResult = searchResult;