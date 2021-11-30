const express = require('express');
const Rental = require('../models/Rental');
const router = express.Router();


router.get("/", async (req, res) => {
    const rentals = await Rental.find()
        .populate("book", ["title", "author"])
        .populate("user", ["name", "email"]);
    try {
        return res.status(200).json(rentals);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the rentals"})
    }
});

router.get("/rental/:id", async (req,res) => {
    const { id } = req.params;
    const singleRental = await Rental.findById(id);
    try {
        return res.status(200).json(singleRental);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the single rental"})        
    }
});

router.post("/rental", async (req, res) => {
    const rentalToCreate = await Rental.create(req.body);
    try {
        return res.status(201).json(rentalToCreate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create the rental"});
    }
});

router.put("/rental/:id", async (req, res) => {
    const { id } = req.params;
    const rentalToUpdate = await Rental.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(rentalToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Something went wrong"});
    }
});

router.delete("/rental/:id", async (req, res) => {
    const { id } = req.params;
    const rentalToDelete = await Rental.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "Successful deletion"})
    } catch (error) {
        return res.stastus(500).json({message: "Couldn't delete the rental"})
    }
})


module.exports = router;