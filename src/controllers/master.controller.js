const express = require("express");
const Master = require("../model/master.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const master = await Master.create(req.body);

    return res.status(200).send(master);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const master = await Master.find().lean().exec();

    return res.status(200).send(master);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
    try {
      const master = await Master.findById(req.params.id).lean().exec();
  
      return res.status(200).send(master);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  });



router.patch("/:id", async (req, res) => {
  try {
    const master = await Master.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(master);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const master = await Master.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(master);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;