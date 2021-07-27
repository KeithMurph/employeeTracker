DROP DATABASE IF EXISTS managment_db;
CREATE managment_db;
USE managment_db

-- ROLES DEPARTMENTS EMPLOYESS
CREATE TABLE roles (
    id INT,
    job_title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,

);

CREATE TABLE department (
    id INT,
    deparment_name VARCHAR(30) NOT NULL,

);


CREATE TABLE employee (
    id INT, 
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(50) NOT NULL

);