const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors()); // solves cors policy
app.use(express.json()); // solves req.body accessing issue

app.get("/", (req, res) => res.send("HI"));
app.post("/api/register", (req, res) => {
    console.log(req.body);
    res.json({
        message: "User is registered",
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
