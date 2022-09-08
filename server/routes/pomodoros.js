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
    db.query(command, [req.body.userID])
      .then(data => {
        res.json(data.rows)
      })


  })

  router.post('/newpomodoro', (req, res) => {
    const command = `INSERT INTO pomodoros (user_id, duration) VALUES ($1, $2)`;
    db.query(command, [req.body.userId, req.body.duration])
      .then(data => {
        res.json(data.rows)
      })
  })










  return router;
}