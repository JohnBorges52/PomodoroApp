-- schema/04_create_stickers.sql
DROP TABLE IF EXISTS stickers CASCADE;
-- CREATE STICKERS
CREATE TABLE stickers (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  stickerPic text NOT NULL
  );
  