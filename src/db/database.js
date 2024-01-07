import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()
const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();




export const getRows = async() =>{
    const items = await pool.query("SELECT * FROM items");
    console.log(items[0])
    console.log(typeof(items))
    //return items[0];
}

//const info = await getRows()
getRows()
