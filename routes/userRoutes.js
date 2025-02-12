const express = require("express");
const User = require("../models/User");

const router = express.Router();

//  Create (Insert a New User)
app.post("/post", async (req, res) => {
    console.log("Inside POST function");
    try {
        const data = new monmodel({
            name: req.body.name,
            email: req.body.email,
            id: req.body.id
        });
        const val = await data.save();
        res.status(201).json(val);  // 201 Created
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//  Read (Get All Users)
app.get("/get", async (req, res) => {
    try {
        const users = await monmodel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update (Modify a User by ID)
app.put("/update/:id", async (req, res) => {
    try {
        const updatedUser = await monmodel.findOneAndUpdate(
            { id: req.params.id },  // Find by "id" field (not MongoDB _id)
            req.body,  // New data to update
            { new: true, runValidators: true }
        );
        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete (Remove a User by ID)
app.delete("/delete/:id", async (req, res) => {
    try {
        const deletedUser = await monmodel.findOneAndDelete({ id: req.params.id });
        if (!deletedUser) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
