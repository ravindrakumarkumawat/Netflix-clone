CREATE TABLE entities (
  ent_id SERIAL PRIMARY KEY NOT NULL,
  ent_name VARCHAR(50) NOT NULL,
  ent_thumbnail VARCHAR(50) NOT NULL,
  ent_preview VARCHAR(50) NOT NULL,
  cat_id INTEGER NOT NULL REFERENCES categories(cat_id) ON DELETE CASCADE
);

INSERT INTO entities (ent_name, ent_thumbnail, ent_preview, cat_id) VALUES
('Friends', 'entities/thumbnails/friends.jpg', 'entities/previews/1.mp4', 3),
('The Simpsons', 'entities/thumbnails/thesimpsons.jpg', 'entities/previews/6.mp4', 20),
('Toy Story', 'entities/thumbnails/toystory.jpg', 'entities/previews/1.mp4', 13),
('Inbetweeners', 'entities/thumbnails/inbetw.jpg', 'entities/previews/2.mp4', 3),
('Suits', 'entities/thumbnails/Suits.jpg', 'entities/previews/3.mp4', 4),
('Captain Underpants', 'entities/thumbnails/cu.jpg', 'entities/previews/4.mp4', 13),
('Brooklyn Nine-Nine', 'entities/thumbnails/bnn.jpg', 'entities/previews/5.mp4', 3),
('That 70s Show', 'entities/thumbnails/tss.jpg', 'entities/previews/6.mp4', 3),
('Pokemon', 'entities/thumbnails/pok.jpg', 'entities/previews/2.mp4', 20),
('Spongebob Squarepants', 'entities/thumbnails/sbsp.jpg', 'entities/previews/3.mp4', 20),
('Futurama', 'entities/thumbnails/fut.jpg', 'entities/previews/1.mp4', 20),
('Johnny Bravo', 'entities/thumbnails/jb.jpg', 'entities/previews/4.mp4', 20),
('Teenage Mutant Ninja Turtles', 'entities/thumbnails/ninj.jpg', 'entities/previews/5.mp4', 20),
('Power Puff Girls', 'entities/thumbnails/ppg.jpg', 'entities/previews/6.mp4', 20),
('Teen Titans Go', 'entities/thumbnails/ttg.jpg', 'entities/previews/2.mp4', 20),
('Jurassic Park', 'entities/thumbnails/jp.jpg', 'entities/previews/3.mp4', 9),
('Grease', 'entities/thumbnails/grease.jpg', 'entities/previews/4.mp4', 17),
('Paddington Bear', 'entities/thumbnails/pb.jpg', 'entities/previews/5.mp4', 13),
('Santa Clause', 'entities/thumbnails/santa.jpg', 'entities/previews/1.mp4', 18),
('Monster Family', 'entities/thumbnails/monsterfamily.jpg', 'entities/previews/6.mp4', 13),
('Top Gun', 'entities/thumbnails/tg.jpg', 'entities/previews/2.mp4', 1),
('Home Alone', 'entities/thumbnails/ha.jpg', 'entities/previews/3.mp4', 18),
('The Grinch', 'entities/thumbnails/gr.jpg', 'entities/previews/4.mp4', 18),
('National Lampoons Christmas Vacation', 'entities/thumbnails/la.jpg', 'entities/previews/5.mp4', 18),
('Elf', 'entities/thumbnails/elf.jpg', 'entities/previews/6.mp4', 18),
('Fred Claus', 'entities/thumbnails/fc.jpg', 'entities/previews/2.mp4', 18),
('Jaws', 'entities/thumbnails/jaws.jpg', 'entities/previews/3.mp4', 9),
('Live Die Repeat', 'entities/thumbnails/ldr.jpg', 'entities/previews/4.mp4', 9),
('Into the Storm', 'entities/thumbnails/its.jpg', 'entities/previews/1.mp4', 9),
('Mission Impossible', 'entities/thumbnails/mi.jpg', 'entities/previews/5.mp4', 1),
('Never Back Down', 'entities/thumbnails/nbd.jpg', 'entities/previews/6.mp4', 1),
('Mechanic', 'entities/thumbnails/mec.jpg', 'entities/previews/2.mp4', 1),
('Need for Speed', 'entities/thumbnails/nfs.jpg', 'entities/previews/3.mp4', 1),
('Gravity', 'entities/thumbnails/gra.jpg', 'entities/previews/4.mp4', 7),
('Step Brothers', 'entities/thumbnails/sb.jpg', 'entities/previews/5.mp4', 3),
('Game of Thrones', 'entities/thumbnails/got.jpg', 'entities/previews/1.mp4', 4),
('Dark Money', 'entities/thumbnails/dm.jpg', 'entities/previews/6.mp4', 4),
('Yellowstone', 'entities/thumbnails/yel.jpg', 'entities/previews/2.mp4', 4),
('Manifest', 'entities/thumbnails/man.jpg', 'entities/previews/3.mp4', 4),
('The Sound of Music', 'entities/thumbnails/som.jpg', 'entities/previews/4.mp4', 17),
('Hairspray', 'entities/thumbnails/hs.jpg', 'entities/previews/1.mp4', 17),
('Believe', 'entities/thumbnails/bel.jpg', 'entities/previews/5.mp4', 17),
('Chris Brown: Till I Die', 'entities/thumbnails/tid.jpg', 'entities/previews/6.mp4', 17),
('Men in Black', 'entities/thumbnails/mib.jpg', 'entities/previews/2.mp4', 7),
('Interstellar', 'entities/thumbnails/int.jpg', 'entities/previews/3.mp4', 7),
('Transformers', 'entities/thumbnails/tra.jpg', 'entities/previews/1.mp4', 7),
('Cloudy with a Chance of Meatballs', 'entities/thumbnails/cwc.jpg', 'entities/previews/4.mp4', 13),
('District 9', 'entities/thumbnails/d9.jpg', 'entities/previews/5.mp4', 9);