ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '1155';

DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE portfolio.message (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO portfolio.message VALUES (1,"Hello, my name is Supphakorn Innuphat. You can call me Tonsak. I'm studying in faculty of applied science, major in computer science at King Mongkut's University of Technology North Bangkok.");

INSERT INTO portfolio.message VALUES (2,'Age: 21');

INSERT INTO portfolio.message VALUES (3,'Birthdate: March 14, 2002');

INSERT INTO portfolio.message VALUES (4,'Hobbies: Play game, play piano');

INSERT INTO portfolio.message VALUES (5,'Tel: 091 7431959');
