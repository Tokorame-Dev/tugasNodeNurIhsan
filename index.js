const express = require('express')
const app = express()
const port = 8000
const { tanggal } = require("./tanggal")

const { data, add, hapus, edit, addFile,deleteFile, renameFile } = require('./data');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/nama', (req, res) => {
    res.send('Nama!')
})

app.get('/tanggal', (req, res) => {
    res.send(tanggal())
})

app.get('/query', (req, res) => {
    res.send(req.query)
})

app.get("/data/:file", (req, res) => {
    res.send(data(req.params.file))
})

app.get("/add/", (req, res) => {
    res.send(addFile(req.body.name));
})
 
app.get("/delete", (req, res) => {
    res.send(deleteFile(req.body.name));
})
 
app.get("/rename", (req, res) => {
    res.send(renameFile(req.body.oldName, req.body.newName));
})
 
app.get("/data/:file/add", (req, res) => {
    res.send(add(req.params.file, req.body.nama, req.body.alamat));
})
 
app.get("/data/:file/hapus/:id", (req, res) => {
    res.send(hapus(req.params.file, req.params.id));
})
 
app.get("/data/:file/edit/:id", (req, res) => {
    res.send(edit(req.params.file, req.params.id, req.body.nama, req.body.alamat));
})
 

// app.get("/hapus/:id", (req, res) => {
//     res.send(hapus(req.params.id))
// })

// app.post("/posts", (req, res) => {
//     res.send(req.body);
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})