CREATE TABLE categories (
  cat_id SERIAL PRIMARY KEY NOT NULL,
  cat_name VARCHAR(50) NOT NULL
);

INSERT INTO categories (cat_name) VALUES ('Action & adventure'),
('Classic'),
('Comedies'),
('Dramas'),
('Horror'),
('Romantic'),
('Sci - Fi & Fantasy'),
('Sports'),
('Thrillers'),
('Documentaries'),
('Teen'),
('Children & family'),
('Anime'),
('Independent'),
('Foreign'),
('Music'),
('Christmas'),
('Others'),
('Cartoon');