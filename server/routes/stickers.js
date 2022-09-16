const router = require('express').Router();

module.exports = (db) => {

  /// get information of all stickers
  router.get('/', (req, res) => {
    const command = "SELECT * FROM stickers";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });

  return router;
}