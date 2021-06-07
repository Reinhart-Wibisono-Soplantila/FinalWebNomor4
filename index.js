const { request, response } = require('express')
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug');
var Data = [
    {
        Nama: 'Reinhart Wibisono Soplantila',
        Nim : 'D121191051',
        Kelas: 'B',
        Departemen: 'Teknik Informatika',
        Fakultas: 'Teknik'
    }
]
app.get('/', (request, response) =>{
    response.render('index')
})

app.get('/biodata', (request, response) =>{
    response.send(`
        Nama: ${Data[0].Nama} <br/>
        Nim: ${Data[0].Nim} <br/>
        Kelas: ${Data[0].Kelas} <br/>
        Departemen: ${Data[0].Departemen} <br/>
        Fakultas: ${Data[0].Fakultas} <br/>`
    )
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})