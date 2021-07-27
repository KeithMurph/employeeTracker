const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "managment_db",
  },
  console.log(`Connected to the managment_db database.`)
);

inquirer();
table();
