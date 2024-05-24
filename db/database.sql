CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(45) DEFAULT NULL,
    salary INT(6) DEFAULT NULL, 
    PRIMARY KEY (id)
);

SHOW TABLES;

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Javier', 3000),
(2, 'Alex', 2000),
(3, 'Julio', 3000),
(4, 'Hector', 1000);