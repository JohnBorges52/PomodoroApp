const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM pomodoros";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });

  router.post('/mypomodoros', (req, res) => {
    const command = "SELECT count(*) AS exact_count FROM pomodoros WHERE user_id = $1";
    db.query(command, [req.body.id])
      .then(data => {
        res.json(data.rows)
      })


  })










  return router;
}