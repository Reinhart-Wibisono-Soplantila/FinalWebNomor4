var express = require('express');
var Mahasiswa = require('../models/mahasiswaModels')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Mahasiswa.selectAllMahasiswa((err, result) => {
     if(err) 
         console.log(err)
     else
         res.render('listmahasiswa', {title : 'List Mahasiswa', data : result})
  })
 });

//OPEN CREATE NEW DATA PAGE
router.get('/add', (req,res, next) =>{
  // res.send('ini adalah bagian add')
  res.render('addmahasiswa', {title :'Tambah Mahasiswa'})
})

//CREATE NEW DATA
router.post('/add', (req, res) =>{
  console.log(req.body)
  console.log('Creating Data...')
  Mahasiswa.insertIntoMahasiswa(req.body, (err, result) =>{
      if(err){
          console.log('Fail to Create Data')
          console.log(err)
      } else {
          console.log('Data Created')
          console.log(result)
      }
  })
  // Mahasiswa.insertIntoMahasiswa()
  res.send('data tersimpan...')
})

//OPEN UPDATE PAGE
router.get('/:Nama/edit', (req, res) => {
  Mahasiswa.selectMahasiswa(req.params.Nama, (err,result) => {
        console.log('Update Page Open')
        console.log('Nama nya adalah ' + req.params.Nama)
        let data = result[0]
        res.render('updatemahasiswa', { title : 'Edit Data Mahasiswa', data})
  })
  // res.send('data berhasil diedit....')
})

//UPDATE DATA
router.post('/:Nama/edit', (req, res) =>{
  console.log(req.body)
  console.log('Updating Data...')
  Mahasiswa.updateMahasiswa(req.body, req.params.Nama, (err, result) =>{
      if(err){
          console.log('updating Fail')
          console.log(err)
      } else{
          console.log('Updating Success')
          console.log(result)
      }
  })
  // Mahasiswa.updateMahasiswa()
  res.send('data berhasil diperbaharui...')
})

// DELETE DATA
router.get('/:Nama/delete', (req, res) => {
  Mahasiswa.deleteMahasiswa(req.params.Nama, (err, result)=>{
    console.log('Deleteing Data...')
    let data = result[0]
    if(err){
      console.log('Delete Fail')
      console.log(err)
  } else{
      console.log('Delete Success ' + req.params.Nama)
      console.log(result)
  }
  })
  res.send('data berhasil dihapus...')
})

module.exports = router;