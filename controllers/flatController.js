const Flat = require("../models/flatModel");

// Create Flat
exports.createFlat = async (req, res) => {
  try {

    const flat = new Flat(req.body); // first create

    await flat.save(); // then save

    res.status(201).json(flat);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//all flats
exports.getFlats = async (req, res) => {
  try {

    const flats = await Flat.find();
    res.json(flats);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};