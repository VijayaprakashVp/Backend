const express = require("express");
const User = require("../model/users.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;