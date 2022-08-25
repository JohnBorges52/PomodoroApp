const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM breaks";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });










  return router;
}