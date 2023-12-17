import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BookModel = db.define('books', {

	title: { type: DataTypes.STRING },
	writer: { type: DataTypes.STRING },
	book_description: { type: DataTypes.TEXT },
	
},{
    timestamps: false
});

await sequelize.sync();
console.log("All models were synchronized successfully.");

export default BookModel