DROP DATABASE IF EXISTS managment_db;
CREATE managment_db;
USE managment_db

-- ROLES DEPARTMENTS EMPLOYESS
CREATE TABLE roles (
    id INT,
    job_title VARCHAR(30) NOT NULL,
    roles_department VARCHAR(30) NOT NULL,

);

CREATE TABLE department (
    id INT,
    deparment_name VARCHAR(30) NOT NULL,

);


CREATE TABLE employee (
    id INT, 
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    employee_job_title VARCHAR(50) NOT NULL,
    employee_department VARCHAR(50) NOT NULL,
    salary INT NOT NULL,
    employee_manager VARCHAR(50) NOT NULL

);