var mysql =  require('mysql')

var connection =  mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'latihannodejs',
    port:'3306'
})

connection.connect((err => {
    if(err) throw err;
}))

module.exports = connection