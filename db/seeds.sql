USE managment_db;



-- department values

INSERT INTO department (name)
VALUES  ('Research'),
        ('Engineering'),
        ('Marketing'),
        ('Human Resources'),
        ('Finance');


-- roles values
INSERT INTO role (job_title, salary, department_id)
VALUES  ('Analysis Associate', 150000, 1),
        ('Research Assistant', 85000, 1),
        ('Software Engineer', 120000, 2),
        ('Junior Software Engineer', 90000, 2),
        ('Social Media Coordinator', 80000, 3),
        ('Marketing Specialist', 100000, 3),
        ('Employee Relations', 100000, 4),
        ('Learning and Development', 100000, 4),
        ('Payroll Accountant', 999999, 5),
        ('Financial consultant', 200000, 5);


-- employees values
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Harry", "Potter",2, NULL ),
        ("Ron","Weasley",3, NULL),
        ("Hermione","Granger",4, NULL ),
        ("Tom","Riddle",5, NULL),
        ("Albus","Dumbledore",1, NULL),
        ("Severous","Snape",2, 1),
        ("Luna","Lovegood",3, 2),
        ("Draco","Malfoy",5, 4),
        ("Sirius","Black",1, 5),
        ("Neville","Longbottom",4, 3);
