import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace with your actual MongoDB connection string
const uri = "mongodb://localhost:27017";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const paymentSchema = new mongoose.Schema({
  email: String,
  amount: Number,
  reference: String,
  plan: String,
});

const Payment = mongoose.model("Payment", paymentSchema);

app.post("/api/payment", async (req, res) => {
  const { email, amount, reference, plan } = req.body;

  const newPayment = new Payment({ email, amount, reference, plan });

  try {
    await newPayment.save();
    res.status(201).json("Payment saved successfully");
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
