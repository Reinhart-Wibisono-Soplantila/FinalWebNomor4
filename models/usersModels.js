var sql = require('../db')

var Users =()=>{}

Users.checkUsername = (dataLogin, callback) => {
    sql.query('select * from mahasiswa where username = ? and password = md5(?)', {username: dataLogin.username, password: dataLogin.password})
    if(err) {
        console.log(err)
        callback(err,null)
    } else {
        callback(null, res)
    }
}

module.exports = Users