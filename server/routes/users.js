const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });


  router.post("/new", (req, res) => {

    const command = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`;

    db.query(command, [
      req.body.username,
      req.body.email,
      req.body.psw
    ])
      .then((data) => {
        res.status(200).json(data);
      })

    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });



  });










  return router;
}