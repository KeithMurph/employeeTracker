USE managment_db;



-- department values

INSERT INTO department(id, deparment_name)
VALUES  ("Research"),
        ("Engineering"),
        ("Marketing"),
        ("Human Resources"),
        ("Finance");


-- roles values
INSERT INTO roles(job_title, salary, deparment_id)
VALUES  ("Analysis Associate", 150000, 1),
        ("Research Assistant", 85000, 1),
        ("Software Engineer", 120000, 2),
        ("Junior Software Engineer", 90000, 2),
        ("Social Media Coordinator", 80000, 3),
        ("Marketing Specialist", 100000, 3),
        ("Employee Relations", 100000, 4),
        ("Learning and Development", 100000, 4),
        ("Payroll Accountant", 999999, 5),
        ("Financial consultant", 200000, 5);


-- employees values
INSERT INTO employees(first_name, last_name, roles_id, manager_id)
VALUES  ("Harry", "Potter" , 2, 7),
        ("Ron","Weasley", 3, 9),
        ("Hermione","Granger", 4, 13),
        ("Tom","Riddle", 5, 18),
        ("Albus","Dumbledore", 1, 20),
        ("Severous","Snape", 2, 7),
        ("Luna","Lovegood", 3, 9),
        ("Draco","Malfoy", 5, 18),
        ("Sirius","Black", 1, 20),
        ("Neville","Longbottom", 4, 13);
