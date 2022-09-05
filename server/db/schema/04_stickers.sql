-- schema/04_create_stickers.sql
DROP TABLE IF EXISTS breaks CASCADE;
-- CREATE STICKERS
CREATE TABLE stickers (
  id SERIAL PRIMARY KEY,
  sticker text NOT NULL
  );