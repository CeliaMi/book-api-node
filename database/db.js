import { Sequelize, sequelize } from "sequelize";
import { DB_NAME,DB_PASSWORD,DB_USER } from "../config";

const db = new Sequelize(DB_NAME, DB_USER,DB_PASSWORD, {
		host: 'localhost',
		dialect: 'mysql',
		define: {
			timestamps: false 
		}
}) 

await sequelize.sync();
console.log("All models were synchronized successfully.");

export default db;