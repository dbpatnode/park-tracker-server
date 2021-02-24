CREATE DATABASE parktracker;

CREATE TABLE users
(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL

);

-- CREATE TABLE parks
-- (
--     park_id SERIAL PRIMARY KEY,
--     user_id INT NOT NULL,
--     street VARCHAR(40) NOT NULL,
--     apartment VARCHAR(40),
--     city VARCHAR(40),
--     state VARCHAR(40),
--     comments text,
--     rating int NOT NULL,
--     start_date DATE NOT NULL,
--     end_date DATE NULL DEFAULT NULL,
--     post_date DATE NOT NULL DEFAULT CURRENT_DATE,
--     FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
-- )
