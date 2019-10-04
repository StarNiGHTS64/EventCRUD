-- Creating Database
CREATE DATABASE crudevents;

--Using Database
use crudevents;

-- Creating Table
CREATE TABLE event (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(500) NOT NULL,
  address VARCHAR(100) NOT NULL,
  begindate VARCHAR(100) NOT NULL,
  enddate VARCHAR(100) NOT NULL
);

--Show Tables
SHOW TABLES;

--Describe Tables
describe event;
