const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");
const { listenerCount } = require("events");

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

function mainMenu () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'viewDatabase'
            message: 'What would you like to do?',
            choices: [ "View All Employees",
                        "Add Employee",
                        "Update Employee Role",
                        "View All Roles",
                        "Add Role",
                        "View All Departments",
                        "Add Department",
                        "Quit"]
        }])}         
            


//  .then choice
// view employees run viewEmployees function

// add employee run addEmployee function

// update employee role run updateEmployeeRole

// View all roles run viewAllRoles

// add role run addNewRole

// view all departments run viewAllDepartments

// add department runs addDepartment





// viewAllEmployees() => {}
// addEmployee() = > {}
// updateEmployeeRole() => {}
// viewAllRoles() => {}
// addRole() => {}
// viewAllDepartments () => {}
// addDepartment() => {}


mainMenu();