require("dotenv").config();  // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas using the `.env` variable
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Error connecting to DB:", error);
        process.exit(1);
    }
};

// // Schema
// const sch = {
//     name: String,
//     email: String,
//     id: Number
// };

// const monmodel = mongoose.model("NEWCOL", sch);


// //  Create (Insert a New User)
// app.post("/post", async (req, res) => {
//     console.log("Inside POST function");
//     try {
//         const data = new monmodel({
//             name: req.body.name,
//             email: req.body.email,
//             id: req.body.id
//         });
//         const val = await data.save();
//         res.status(201).json(val);  // 201 Created
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// //  Read (Get All Users)
// app.get("/get", async (req, res) => {
//     try {
//         const users = await monmodel.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Update (Modify a User by ID)
// app.put("/update/:id", async (req, res) => {
//     try {
//         const updatedUser = await monmodel.findOneAndUpdate(
//             { id: req.params.id },  // Find by "id" field (not MongoDB _id)
//             req.body,  // New data to update
//             { new: true, runValidators: true }
//         );
//         if (!updatedUser) return res.status(404).json({ message: "User not found" });

//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Delete (Remove a User by ID)
// app.delete("/delete/:id", async (req, res) => {
//     try {
//         const deletedUser = await monmodel.findOneAndDelete({ id: req.params.id });
//         if (!deletedUser) return res.status(404).json({ message: "User not found" });

//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// API Routes
app.use("/users", userRoutes);
connectDB();
// Start Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
