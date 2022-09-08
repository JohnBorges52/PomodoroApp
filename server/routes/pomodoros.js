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

    console.log("ST TOTAL:", req.body.startTime)
    console.log("ET TOTAL:", req.body.endTime)


    const command = `INSERT INTO pomodoros (user_id, start_at, ended_at) VALUES (${req.body.userId}, "${req.body.startTime.hour}:${req.body.startTime.minutes}:${req.body.startTime.seconds}", "${req.body.endTime.hour}:${req.body.endTime.minutes}:${req.body.endTime.seconds}")`;

    db.query(command)
      .then(data => {
        res.json(data.rows)
      })
  })










  return router;
}