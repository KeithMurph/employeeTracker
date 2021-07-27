const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");


const db = mysql.createConnection({
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "managment_db",
  },
  console.log('Connected to the managment_db database.')
);

function mainMenu () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'viewDatabase',
            message:'What would you like to do?',
            choices: [ "View All Employees",
                        "Add Employee",
                        "Update Employee Role",
                        "View All Roles",
                        "Add Role",
                        "View All Departments",
                        "Add Department",
                        "Quit"]
        }])
      .then(function(answer) {
        switch(choice.viewDatabase){
          case "View All Employess":
            viewAllEmployees();
          break;
          case "Add Employee":
            addEmployee();
          break;
          case "Update Employee Role":
            updateEmployeeRole();
           break;
          case "View All Roles":
            viewAllRoles();
            break;
            case "Add Role":
            addRole(); 
            break;
            case "View All Departments":
            viewAllDeparments();
            break;
            case "Add Department":
              addDepartment();
              break;
            case "Quit":
            quit();
            break;


        }

      })
      
      
      
      }         
            








// viewAllEmployees() => {}
// addEmployee() = > {}
// updateEmployeeRole() => {}
// viewAllRoles() => {}
// addRole() => {}
// viewAllDepartments () => {}
// addDepartment() => {}


mainMenu();