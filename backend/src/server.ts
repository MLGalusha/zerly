import express from "express";

const app = express();
const PORT = 3001; // Port the backend will run on

app.get("/", (req, res) => {
    res.send("Backend is running?");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});