const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");

const UserRouter = require("express").Router();

UserRouter.post("/registerUser", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    );
    const user = await UserModel({
      userName: req.body.userName,
      age: req.body.age,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: hashedPassword,
    }).save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

UserRouter.post("/loginUser", async (req, res) => {
  try {
    const user = await UserModel.findOne({ userName: req.body.userName });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).send("Incorrect password");
    }
    
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = UserRouter;
