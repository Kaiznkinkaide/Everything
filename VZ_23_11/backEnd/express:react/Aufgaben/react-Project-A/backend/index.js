import express from 'express'
import fs from 'fs/promises'
import cors from 'cors'

const port = 3000
const app = express()


// const corsOptions = {
//     origin: 'http://localhost:5173',
//     optionsSuccessStatus: 200
//   }

  app.use(express.json())
  app.use(cors())

  app.get('/toDo', async (req, res)=>{
    try{
        const toDo = await fs.readFile('./toDo.json', { encoding: "utf-8"});
        const toDoJson = JSON.parse(toDo);
        res.json(toDoJson)
    }catch (err){
        res.status(500).end()
    }
  })


  app.post('/toDo', async (req, res)=>{
    try{
        const newToDo = req.body
        if(!newToDo.name){
            throw new Error("todo not defined")
        }
        const toDo = await fs.readFile('./toDo.json',{encoding: "utf-8"});
        const toDoJson = JSON.parse(toDo);
        const newToDos = [...toDoJson, newToDo];
        await fs.writeFile("./toDo.json", JSON.stringify(newToDos))
        res.status(201).json(newToDo)
    }catch(err){
        res.status(500).end()
    }
  })


  app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`);
  })