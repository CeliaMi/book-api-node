import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import { PORT } from "./config.js"
import bookRouter from './routes/routes.js'


const app = express()
app.get('/', (_req, res) =>{
res.redirect('/api/books');
})

app.use(cors())
app.use(express.json())
app.use('/api/books', bookRouter)

try{
	await db.authenticate()
		console.log('conected to database🪐')
	}catch{
console.log(`error:' ${error}`)
	}

app.listen(PORT,() =>{
console.log(`🚀server up in http://localhost:${PORT}/`)
} )