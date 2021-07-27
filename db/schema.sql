DROP DATABASE IF EXISTS managment_db;
CREATE DATABASE managment_db;


USE managment_db;


-- department table
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    deparment_name VARCHAR(30) NOT NULL


);

-- roles table
CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    deparment_id INT,
    
    
    FOREIGN KEY (deparment_id)
    REFERENCES deparment(id)
    ON DELETE CASCADE

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
   ON DELETE CASCADE
   
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE CASCADE
);