-- CREATE DATABASE jioflix;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  sign_up_date DATE NOT NULL DEFAULT CURRENT_DATE,
  is_subscribed INTEGER DEFAULT 0
);

INSERT INTO users (first_name, last_name, username, email, password, sign_up_date, is_subscribed)
VALUES ('Ravindra', 'Kumawat', 'invincible76', 'ravindra.kumawat76@gmail.com', '12345678', '2020-07-21', '1');

INSERT INTO users (first_name, last_name, username, email, password)
VALUES ('Arvind', 'Vaishnav', 'leelavaishnav', 'arvindvaishnav76@gmail.com', '12345678');