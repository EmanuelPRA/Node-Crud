const express = require("express");
var cors = require('cors')
const mysql = require('mysql')


const PORT = process.env.PORT || 3001;

const app = express();
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'ncrnn'
})

app.use(cors())

app.post("/register", (req, res) =>{
  const email = req.body.mail
  const username = req.body.uname
  const password = req.body.pass
  db.query("INSERT INTO users (email, username, pass) VALUES(?,?,?)", [email, username, password], (err, result) =>{
    if(err){
      console.log(err)
    }else{
      console.log("User added")
      res.send(result)
    }
  })
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});