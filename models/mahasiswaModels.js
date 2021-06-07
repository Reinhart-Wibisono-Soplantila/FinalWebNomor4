var sql = require('../db')
var Mahasiswa = () =>{}

Mahasiswa.selectAllMahasiswa = (callback) =>{
    sql.query('select * from mahasiswa', (err, res) => {
        if(err) {
            console.log(err)
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
}

Mahasiswa.selectMahasiswa = (Nama, callback) => {
    sql.query('select * from mahasiswa where Nama = ?', Nama, (err, res) => {
        if(err) {
            console.log(err)
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
}

Mahasiswa.updateMahasiswa = (updateData, Nama, callback) => {
    
    sql.query('update mahasiswa set ? where Nama = ?', [{nim : updateData.NIM, Nama : updateData.Nama, 
        Alamat: updateData.Alamat, Kelas : updateData.Kelas}, Nama], (err, res) => {
        if(err) {
            console.log(err)
            callback(err,null)
        } else {
            callback(null, res)
        }
    })
}

Mahasiswa.insertIntoMahasiswa = (newData, callback) => {
    sql.query('insert into mahasiswa set ?', {nim : newData.NIM, nama : newData.Nama, Alamat: newData.Alamat, kelas : newData.Kelas}, (err, res) => {
        if(err) {
            console.log(err)
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
}

Mahasiswa.deleteMahasiswa = (Nama, callback)=>{
    sql.query('delete from mahasiswa where Nama = ?', Nama, (err, res)=>{
        if(err) {
            console.log(err)
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
}
module.exports = Mahasiswa
