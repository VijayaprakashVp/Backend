const express = require("express");
const Saving = require("../model/saving.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const saving = await Saving.create(req.body);

    return res.status(200).send(saving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const saving = await Saving.find().lean().exec();

    return res.status(200).send(saving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
    try {
      const saving = await Saving.findById(req.params.id).lean().exec();
  
      return res.status(200).send(saving);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  });



router.patch("/:id", async (req, res) => {
  try {
    const saving = await Saving.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(saving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const saving = await Saving.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(saving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;