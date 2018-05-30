### Schema for burgers

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(45)  NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);
