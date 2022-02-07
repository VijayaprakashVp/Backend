const express = require("express");
const Branch = require("../model/branch.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const branch = await Branch.create(req.body);

    return res.status(200).send(branch);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const branch = await Branch.find().lean().exec();

    return res.status(200).send(branch);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
    try {
      const branch = await Branch.findById(req.params.id).lean().exec();
  
      return res.status(200).send(branch);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  });



router.patch("/:id", async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(branch);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(branch);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;