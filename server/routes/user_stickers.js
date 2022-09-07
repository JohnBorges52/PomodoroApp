const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM user_stickers";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });

  router.post('/mystickers', (req, res) => {
    const command = "SELECT * FROM stickers JOIN user_stickers ON sticker_id = stickers.id WHERE user_id = $1";
    db.query(command, [req.body.userID])
      .then(data => {
        res.json(data.rows);
      })
  });











  return router;
}