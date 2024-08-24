DROP TABLE IF EXISTS gemini_Ai;

CREATE DATABASE gemini;

CREATE TABLE gemini_Ai(
    id SERIAl PRIMARY KEY,
    username VARCHAR(50),
    email TEXT UNIQUE,
    password TEXT
);

INSERT INTO gemini_Ai(username, email, password) VALUES('Chinweike', 'wike@gmail.com', 'Wike122');