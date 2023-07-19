// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const DB_URL = 'mongodb://localhost:27017/MyProfile'; // MongoDB connection URL with the database name "MyProfile"
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    occupation: { type: String },
    interest: { type: String },
    age: { type: Number },
    message: { type: String },
});
//

const UserData = mongoose.model('UserData', userDataSchema);
// Model for the "UserData" collection


app.post('/api/users', async (req, res) => {
    const userData = req.body;
    try {
        const newUser = await UserData.create(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error saving user data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

