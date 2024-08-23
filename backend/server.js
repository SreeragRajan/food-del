import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from "./routes/foodRouter.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints

app.use('/api/food', foodRouter);
app.use('/images', express.static("uploads"));


app.get("/", (req, res) => {
    res.send("api working");
})

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
})

// mongodb+srv://sreeragrajan:<password>@cluster0.bverm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0