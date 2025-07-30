const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); // 🔹 Body parsing middleware

mongoose.connect('mongodb://localhost:27017/VSCODE')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error is Here", err));

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    gender: { type: String },
    email: { type: String, required: true, unique: true },
    jobtitle: { type: String },
   
});

const User = mongoose.model("user", userSchema);

app.post('/api/user/bulk', async (req, res) => {
    const body = req.body;
    if (!body.firstName || !body.lastName || !body.gender || !body.email || !body.jobtitle) {
        return res.status(400).send("All fields are required");
    }
    const result = await User.create(body);
    console.log(result);
    res.status(201).send("User created successfully");
});
app.get('/api/user', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});




app.listen(7000, () => {
    console.log("Server is running on port 7000");
});
