import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudoperation'
})
app.get('/', (req, res) => {
    const sql = "SELECT * FROM userdata";
    db.query(sql, (err, result) => {
        if (err) return res.json({Message: "Error Inside Server"});
        return res.json(result);
    })
})
app.listen(8081, () => {
    console.log("sever is working")
})
