const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "managment_db",
  },
  console.log(`Connected to the managment_db database.`)
);


// view all employess


const viewAllEmployees = () => {
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.job_title, department.name AS department,
  role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id`,
    (err, data) => {
      if (err) {
        console.log(err);
        db.end();
      } else {
        console.table(data);
        main();
      }
    }
  );
};


// view All roles

const viewAllRoles = () => {
  db.query("SELECT * FROM role", (err, data) => {
    if (err) {
      console.log(err);
      db.end();
    } else {
      console.table(data);
      main();
    }
  });
};

// view all departments
const viewAllDepartments = () => {
  db.query("SELECT * FROM department", (err, data) => {
    if (err) {
      console.log(err);
      db.end();
    } else {
      console.table(data);
      main();
    }
  });
};

// add department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Department Name?",
        name: "name",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department (name) VALUES(?)`,
        [answers.name],
        (err, data) => {
          if (err) {
            console.log(err);
            db.end();
          } else {
            console.log("Department Added!");
           viewAllDepartments();
          }
        }
      );
    });
};

// add role
const addRole = () => {
  db.query("SELECT * FROM department", (err, data) => {
    if (err) {
      console.log(err);
      db.end();
    } else {
      const inqDeps = data.map((department) => {
        return {
          name: department.name,
          value: department.id,
        };
      });
      inquirer
        .prompt([
          {
            type: "input",
            message: "Name of Employee's role?",
            name: "name",
          },
          {
            type: "list",
            message: "Which department does this role answer to?",
            choices: inqDeps,
            name: "department_id",
          },

          {
            type: "input",
            message: "What is this roles salary?",
            name: "salary",
          },
        ])
        .then((answers) => {
          db.query(
            `INSERT INTO role (job_title,salary,department_id) VALUES(?,?,?)`,
            [answers.name, answers.salary, answers.department_id],
            (err, data) => {
              if (err) {
                console.log(err);
                db.end();
              } else {
                console.log("Role added!");
                viewAllRoles();
              }
            }
          );
        });
    }
  });
};


// add employee
async function addEmployee() {
  const addname = await inquirer.prompt([
    {
      type: "input",
      message: "What is the Employee's first name?",
      name: "first_name",
    },
    {
      type: "input",
      message: "What is the Employee's last name?",
      name: "last_name",
    },
  ]);
  db.query(
    "SELECT role.id, role.job_title FROM role ORDER BY role.id;",
    async (err, res) => {
      if (err) throw err;
      const { role } = await inquirer.prompt([
        {
          name: "role",
          type: "list",
          choices: () => res.map((res) => res.title),
          message: "What is the employee's role?: ",
        },
      ]);
      let roleId;
      for (const row of res) {
        if (row.title === role) {
          roleId = row.id;
          continue;
        }
      }
      db.query("SELECT * FROM employee", async (err, res) => {
        if (err) throw err;
        let choices = res.map((res) => `${res.first_name} ${res.last_name}`);
        choices.push("none");
        let { manager } = await inquirer.prompt([
          {
            name: "manager",
            type: "list",
            choices: choices,
            message: "Choose the employee's Manager:",
          },
        ]);
        let manager_id;
        let managerName;
        if (manager === "none") {
          manager_id = null;
        } else {
          for (const data of res) {
            data.fullName = `${data.first_name} ${data.last_name}`;
            if (data.fullName === manager) {
              manager_id = data.id;
              managerName = data.fullName;
              continue;
            }
          }
        }
        console.log("Employee Added");
        db.query(
          "INSERT INTO employee SET ?",
          {
            first_name: addname.first,
            last_name: addname.last,
            role_id: roleId,
            manager_id: manager_id,
          },
          (err, res) => {
            if (err) throw err;
            viewAllEmployees();
          }
        );
      });
    }
  );
}

async function updateEmployeeRole() {
  const addname = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "first",
    },
    {
      type: "input",
      message: "What is the Employee's last name?",
      name: "last",
    },
  ]);
  db.query(
    "SELECT role.id, role.job_title FROM role ORDER BY role.id;",
    async (err, res) => {
      if (err) throw err;
      const { role } = await inquirer.prompt([
        {
          name: "roles",
          type: "list",
          choices: () => res.map((res) => res.title),
          message: "What is the employee's new role?: ",
        },
      ]);
      let roleId;
      for (const row of res) {
        if (row.title === role) {
          roleId = row.id;
          continue;
        }
      }
      console.log("Employee role updated!");
      db.query(
        "UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?",
        [
          roleId,
          addname.first,
          addname.last,
        ],
        (err, res) => {
          if (err) throw err;
          viewAllEmployees();
        }
      );
    }
  );
}

const main = () => {
  inquirer
    .prompt({
      type: "list",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "QUIT",
      ],
      message: "what do you want to do?",
      name: "choice",
    })
    .then(({ choice }) => {
      switch (choice) {
        case "View All Employees":
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
          viewAllDepartments();
          break;
        case "Add Department":
          addDepartment();
          break;

        default:
          console.log("Till next time!");
          db.end();
          break;
      }
    });
};

main();




