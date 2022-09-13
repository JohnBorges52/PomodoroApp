const router = require('express').Router();
const bcrypt = require('bcrypt')

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });



  router.post("/loginSuccess", async (req, res) => {

    try {
      const email = req.body.email
      const psw = req.body.psw
      const user = await db.query(`SELECT * from USERS WHERE email = $1`, [email]);
      console.log(user.rows.length);
      if (user.rows.length !== 0) {
        const validPass = await bcrypt.compare(psw, user.rows[0].password);
        if (validPass) {
          res.json(user.rows[0])
        }
        else {
          res.json("Wrong Password")
        }
      } else {
        res.json("NO EMAIL FOUND")
      }


    } catch (e) {
      console.log(e);
      res.status(500).send("user not found")
    }


  });


  router.get("/alreadyExist", (req, res) => {
    const command = `SELECT * FROM users WHERE email = $1 OR username = $2`;
    db.query(command, [
      req.query.email,
      req.query.username

    ])
      .then(data => {
        res.json(data.rows)
      })
      ;
  })


  router.post("/new", async (req, res) => {

    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.psw, salt)
      const command = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

      db.query(command, [
        req.body.username,
        req.body.email,
        hashedPassword
      ])
        .then((data) => {
          res.status(200).json(data);
        })

    } catch {
      res.status(500).send()
    };

  });


  router.get("/success", (req, res) => {
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