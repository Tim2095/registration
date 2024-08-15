const userRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}


userRouter.post("/", async (req, res) => {
  const { username, name, age, gender, password, email } = req.body;

  const saltRounds = 10;

  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    age,
    gender,
    email,
    passwordHash,
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});



userRouter.put("/:id", async (req, res) => {
  const token = req.body.token;
  const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)

  const user = await User.findById(decodedToken.id);

  const userForToken = {
    id: req.body.id,
    username: req.body.username,
  };

  const newToken = jwt.sign(userForToken, process.env.secret, {
    expiresIn: 60 * 60,
  });

  const updatedUser = {
    token: newToken,
    ...req.body,
  };


  const newUser = await User.findByIdAndUpdate(decodedToken.id, updatedUser, {
    new: true,
  });
  res
    .status(200)
    .json({
      token: newToken,
      id: newUser.id,
      username: newUser.username,
      name: newUser.name,
      age: newUser.age,
    });
});

module.exports = userRouter;
