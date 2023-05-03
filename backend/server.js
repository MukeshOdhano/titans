const express = require("express");
const mySQL = require("mysql");

const app = express();

// Connection with mySql
const database = mySQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "datatest",
});

// Create Database
app.get("/db", (req, res) => {
   database.query("CREATE DATABASE datatest", (err, data) => {
    if (err) throw err;

    // console.log(data);
    res.send("Database Created");
   });
});

database.connect((err) => {
  if (err) throw err;
  console.log("Connected with MySQL");
});

// Create Table
app.get("/createtable", (req, res) => {
   let sql = "CREATE TABLE Data (id int Auto_increment primary key, title varchar(255), body varchar(255))";
   database.query(sql, (err, result) => {
      if (err) throw err;

      console.log(result);
      res.send(result);
  });
});

// DELETE TABLE
app.get('/deleteTable', (req, res)=>{
   let tabelName = 'posts'
   let sql = `DROP TABLE ${tabelName}`

   database.query(sql, (err, result)=>{
      if(err) throw err;

      console.log('Table has been deleted'+"\n"+result)
      res.send(result)
   })
})


// ADD DATA IN DATA TBALE
app.get('/add', (req, res)=>{
   let Data = {
      title: 'Post_2',
      body: 'This Body 0002'
   }

   let sql = 'INSERT INTO data set ? ';
   let query = database.query(sql, Data, (err, result)=>{
      if(err) throw err;

      console.log(`Data has been Inserted \n${Data}`)
      res.send(result)
   })
})

app.listen(8000, () => {
  console.log(`Server listening on http://localhost:${8000}/`);
});
