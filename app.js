import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import { PORT , NODE_ENV } from "./config.js"
import bookRouter from './routes/routes.js'
const MULTI_PORT = NODE_ENV === 'test'? 8000 : PORT


export const app = express()
app.get('/', (_req, res) =>{
res.redirect('/api/books');
})

app.use(cors())
app.use(express.json())
app.use('/api/books', bookRouter)

try{
	await db.authenticate()
	console.log('conected to database🪐')
	}catch(error){
	console.log(`error:' ${error}`)
	}


    export const server = app.listen(MULTI_PORT ,() =>{
	console.log(`🚀server up in http://localhost:${MULTI_PORT }/`)
} )