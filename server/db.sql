CREATE DATABASE finance_tracker;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    amount NUMERIC NOT NULL,
    date DATE NOT NULL
);
