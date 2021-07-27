DROP DATABASE IF EXISTS managment_db;
CREATE DATABASE managment_db;

USE managment_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    deparment_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    deparment_id INT NOT NULL
    -- FOREIGN KEY (deparment_id)
    -- REFERENCES department(id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    roles_id  INT,
    manager_id INT  
   
--    FOREIGN KEY (roles_id)
--     REFERENCES roles(id),
   
   
--     FOREIGN KEY (manager_id)
--     REFERENCES employees(id)

);



