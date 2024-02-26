import express from 'express'
import fs from 'fs'

const app = express()

const port = 4000


app.use(express.static("public"))

app.listen(port, () =>{
    console.log(`server läuft auf http://localhost:${port}`)})
