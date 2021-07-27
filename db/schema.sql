DROP DATABASE IF EXISTS managment_db;
CREATE managment_db;


USE managment_db


-- department table
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    deparment_name VARCHAR(30) NOT NULL,


);

-- roles table
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    deparment_id INT NOT NULL,
    FOREIGN KEY (deparment_id)
    REFERENCES deparment(id)

);




-- employee table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    roles_id  INT,
    manager_id INT,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    FOREIGN KEY (manager_id)
    FOREIGN KEY employees(id)

);