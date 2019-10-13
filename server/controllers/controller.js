const Bcrypt = require("bcrypt");
const db = require("../model/database");
const jwtUtils = require("./../utils/jtwutils");

module.exports = {
  async login(req, res) {
    const { name, password } = req.body;
    if (name && password) {
      const user = await db.user.findOne({ where: { username: name } });

      if (!user) {
        return res.status(401).json({ message: "No such user found" });
      }

      Bcrypt.compare(password, user.password).then(rez => {
        if (rez) {
          user.password = undefined;
          let payload = { id: user.id };
          let token = jwtUtils.jwt.sign(
            payload,
            jwtUtils.jwtOptions.secretOrKey
          );
          return res.json({ msg: "ok", token: token, user: user });
        } else {
          return res.status(401).json({ message: "Password is incorrect" });
        }
      });
    }
  },

  async register(req, res) {
    const { username, password, firstName, lastName, email } = req.body;
    db.user
      .findOne({
        where: {
          [db.Sequelize.Op.or]: [{ username: username }, { email: email }]
        }
      })
      .then(user => {
        if (user) {
          return res.status(403).json({ message: "User with that username/email already exists" });
        } else {
          Bcrypt.hash(password, 10)
            .then(hash =>
              db.user
                .create({
                  username: username,
                  password: hash,
                  firstName: firstName,
                  lastName: lastName,
                  email: email
                })
                .then(user =>
                   res.status(200).json({
                      message: "Successful creation of user",
                      user: user
                    })
                )
            )
            .catch(err => {
              console.log(err);

              if (err.errors[0].path == "email")
                return res
                  .status(400)
                  .json({
                    message: "Please enter a valid email and try again"
                  });

              return res
                .status(500)
                .json({
                  message: "Something went wrong, please try again later."
                });
            });
        }
      });
  },

  async getAllProducts(req, res) {
    db.bicycle
      .findAll()
      .then(bikes => res.status(200).json(bikes))
      .catch(err => {
        console.error(err);
        return res.status(500).json({ message: "Something went wrong" });
      });
  }
};
