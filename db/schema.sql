CREATE DATABASE burgers_db;

DROP DATABASE IF EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
id INT AUTO_INCREMENT,
burger_name VARCHAR(20),
devoured BOOLEAN,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Cheese Burger');
INSERT INTO burgers (burger_name) VALUES ('Bacon Cheese Burger');
INSERT INTO burgers (burger_name) VALUES ('Impossible Burger');


SELECT * FROM burgers;