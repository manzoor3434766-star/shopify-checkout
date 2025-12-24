const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// SUCCESS URL
app.get("/success", (req, res) => {
  res.send("Payment Successful. Thank you!");
});

// CANCEL URL
app.get("/cancel", (req, res) => {
  res.send("Payment Cancelled. Try again.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
