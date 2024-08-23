CREATE DATABASE gemini;

CREATE TABLE gemini_Ai(
    id SERIAl PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email TEXT UNIQUE,
    password VARCHAR(20)
);

INSERT INTO gemini_Ai(username, email, password) VALUES('Chinweike', 'wike@gmail.com', 'Wike122')