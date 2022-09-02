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

    const command = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

    db.query(command, [
      req.body.username,
      req.body.email,
      req.body.psw
    ])
      .then((data) => {
        res.status(200).json(data);
      })
    // .catch((err) => {
    //   console.error(err.response.data)
    // });
  });

  router.get("/alreadyExist", (req, res) => {
    const command = `SELECT * FROM users WHERE email = $1`;
    db.query(command, [
      req.query.email
    ])
      .then(data => {
        res.json(data.rows)
      })
    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });

  })


  router.get("/sucess", (req, res) => {
    const command = "SELECT * FROM users WHERE email = $1";

    db.query(command, [
      req.query.email
    ])
      .then((data) => {
        res.json(data.rows)
      })

  })









  return router;
}