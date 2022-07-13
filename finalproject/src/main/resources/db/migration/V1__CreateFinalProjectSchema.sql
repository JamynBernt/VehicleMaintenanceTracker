-- SCHEMA
-- CREATE SCHEMA IF NOT EXISTS final_project;

-- TABLES

-- USER

CREATE TABLE IF NOT EXISTS User (
	email VARCHAR(250) NOT NULL,
	user_password VARCHAR(60) NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	PRIMARY KEY(email)
);

-- VEHICLE

CREATE TABLE IF NOT EXISTS Vehicle (
	vehicle_identification_number VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	make VARCHAR(100) NOT NULL,
	model VARCHAR(100) NOT NULL,
	year INTEGER NOT NULL,
	FOREIGN KEY(email) REFERENCES User(email),
	PRIMARY KEY(vehicle_identification_number)
);

-- History

CREATE TABLE IF NOT EXISTS History ( 
	history_number integer NOT NULL AUTO_INCREMENT,
	vehicle_identification_number VARCHAR(100) NOT NULL,
	description VARCHAR(250) NOT NULL,
	FOREIGN KEY(vehicle_identification_number) REFERENCES Vehicle(vehicle_identification_number),
	PRIMARY KEY(history_number)
 );