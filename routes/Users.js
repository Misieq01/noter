const express = require("express");
const User = require("../models/Users");
const AuthMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/Signup", async (req, res) => {
  try {
    const data = await User.validateData(req.body)
    const user = new User(data);
    await user.save();
    const token = await user.GenerateAuthToken();
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send({ message: error.message, field: error.field });
  }
});

router.post("/Login", async (req, res) => {
  try {
    const user = await User.FindByCredentials(req.body.email, req.body.password);
    const token = await user.GenerateAuthToken();
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send({ message: error.message, field: error.field });
  }
});

router.post("/Logout", AuthMiddleware, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return req.token !== token.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/Account", AuthMiddleware, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
