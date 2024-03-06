const mongoose = require("mongoose");
const TourModel = require("../model/tour");

const getAllTour = async (req, res) => {
  const alltour = await TourModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(alltour);
};
const createTour = async (req, res) => {
  const { tourName, tourImg, description, price, address, state } = req.body;
  if (!tourName || !tourImg || !description || !price || !address || !state) {
    return res.status(401).json({
      error: "All Fields are necessary",
    });
  }
  const tour = await TourModel.findOne({ tourName });
  if (tour) {
    return res.status(401).json({
      error: "This trip already exists",
    });
  }
  try {
    const newTour = new TourModel({
      tourName,
      tourImg,
      description,
      price,
      address,
      state,
    });
    await newTour.save();
    return res.json({
      message: "Tour Created successfully !!",
      newTour,
    });
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
};
const getSingleTour = async (req, res) => {
  const { id } = req.params;
  const singleTour = await TourModel.findById(id);
  try {
    if (!singleTour) {
      return res.status(401).json({
        error: "No such id exists",
      });
    } else {
      return res.status(200).json({
        message: "success",
        singleTour,
      });
    }
  } catch (error) {
    return res.status(200).json({
      error: "Error",
    });
  }
};
const updataTour = async (req, res) => {};
const deleteTour = async (req, res) => {};
module.exports = {
  getAllTour,
  createTour,
  updataTour,
  deleteTour,
  getSingleTour,
};
