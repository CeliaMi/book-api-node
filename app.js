import express from "express";
import cors from 'cors'
import db from "./database/db.js"


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

app.listen(8000,() =>{
console.log('🚀server up in http://localhost:8000/')
} )