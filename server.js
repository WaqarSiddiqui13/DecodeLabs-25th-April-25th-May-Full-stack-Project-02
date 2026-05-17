const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public")); // connect frontend

let users = [];

// GET API
app.get("/api/users", (req, res) => {
    res.json(users);
});

// POST API
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "All fields required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.json(newUser);
});

// start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
