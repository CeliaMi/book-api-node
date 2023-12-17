import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import { PORT } from "./config.js"


const app = express()
app.get('/', (_req, res) =>{
 res.send('Hola Api')
})

app.use(cors())
app.use(express.json())

try{
	await db.authenticate()
		console.log('conected to database🪐')
	}catch{
console.log(`error:' ${error}`)
	}

app.listen(PORT,() =>{
console.log(`🚀server up in http://localhost:${PORT}/`)
} )