const express = require("express");
const Fixed = require("../model/fixed.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const fixed = await Fixed.create(req.body);

    return res.status(200).send(fixed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const fixed = await Fixed.find().lean().exec();

    return res.status(200).send(fixed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
    try {
      const fixed = await Fixed.findById(req.params.id).lean().exec();
  
      return res.status(200).send(fixed);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  });



router.patch("/:id", async (req, res) => {
  try {
    const fixed = await Fixed.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(fixed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const fixed = await Fixed.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(fixed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;