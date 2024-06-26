const express = require("express");
const app = express();
const PORT = 5000;

const User = require("./models/user.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const cors = require("cors");
app.use(cors()); // solves cors policy
app.use(express.json()); // solves req.body accessing issue

// Mongoose a MongoDB client
const mongoose = require("mongoose");
// connecting to mdb atlas cluster with the connection string
mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

// listening for the open event on mongoose connection
mongoose.connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => res.send("HI"));
app.post("/api/register", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(200).json({ exists: true });

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    newUser
        .save()
        .then(() => res.status(200).json({ exists: false }))
        .catch((err) => console.error(err));
    console.log(req.body);
});
app.post("/api/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.json({ auth: false });

        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            "secret123"
        );

        // const validPassword = await bcrypt.compare(
        //     req.body.password,
        //     user.password
        // );
        const validPassword = req.body.password == user.password;
        if (!validPassword) return res.json({ auth: false });

        res.json({ auth: true, user: token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error logging in" });
    }
});

// jwt thing
app.post("/api/decode", (req, res) => {
    const token = req.body.token;
    try {
        const decoded = jwt.decode(token);
        res.json(decoded);
    } catch (err) {
        res.status(400).json({ error: "Invalid token" });
    }
});

app.post("/api/quote", async (req, res) => {
    const token = req.headers["x-access-token"];

    try {
        const decoded = jwt.verify(token, "secret123");
        const email = decoded.email;
        await User.updateOne(
            { email: email },
            { $set: { quote: req.body.quote } }
        );

        return res.json({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", error: "invalid token" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
