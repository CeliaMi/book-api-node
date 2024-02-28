import BookModel from '../models/BookModel.js'

//GET all
export const getAllBooks = async (_req, res) => {
	try {
		const books = await BookModel.findAll()
		res.status(200).json(books)
	} catch (error) {
		res.json({ message: error.message })
	}
}

//GET ones
export const getBook = async (req, res) => {
	try {
		const book = await BookModel.findOne({ where: { id: req.params.id } })
		if (book === null) {
			console.log('Not found!');
		}
		res.status(200).json(book)
	} catch (error) {
		res.json({ message: error.message })
	}
}

//CREATE
export const createBook = async (req, res) => {
	try {
		const createdBook = await BookModel.create(req.body)
		res.status(201).json({ message: "has been created successfully!", pepito: createdBook })
	} catch (error) {
		res.status(500).json({ message: error.message })

	}
}

//PUT
export const updateBook = async (req, res) => {
	try {
		await BookModel.update(req.body, { where: { id: req.params.id } })
		res.status(201).json({ message: "has been update successfully!" })
	}
	catch (error) {
		res.status(500).json({ message: error.message })
	}
}

//DELETE
export const deleteBook = async (req, res) => {
	try {
		await BookModel.destroy({ where: { id: req.params.id } })
		res.status(204).json({ message: "has been delete successfully!" })
	} catch {
		res.json({ message: error.message })
	}
}