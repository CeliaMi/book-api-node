import BookModel from '../models/BookModel.js'

//GET
export const getAllBooks = async(req, res) => {
	try{
			const books = await BookModel.findAll()
			res.json(books)
	}catch (error){
			res.json({message: error.message})
	}}

//GET
export const getBook = async(req, res) => {
	try{
			const book = await BookModel.findAll({ where:{id:req.params.id} })
			res.json(book)
	}catch (error){
			res.json({message: error.message})
	}
}

//CREATE
export const createBook= async(req, res) => {
	try{
			await BookModel.create(req.body)
			res.json({message: "has been created successfully!"})
	}catch (error){
			res.json({message: error.message})
	}
}

//PUT
export const updateBook = async(req,res) =>{
	try{ 
			await BookModel.update(req.body, { where:{id:req.params.id}})
			res.json({message: "has been update successfully!"})
		}
	catch(error){
			res.json({message: error.message})
		}
	}

//DELETE
export const deleteBook = async (req, res) => {
	try{
			await BookModel.destroy({ where:{id:req.params.id}})
			res.json({message: "has been delete successfully!"})
	} catch{
			res.json({message: error.message})
	}
}