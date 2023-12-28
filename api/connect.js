import mysql from "mysql2"


const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"password",
    database:"social"
})


export default db