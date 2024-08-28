import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from "./routes/foodRoute.js";
import userRouter from './routes/userRouter.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import 'dotenv/config'

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static("uploads"));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get("/", (req, res) => {
    res.send("api working");
})

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
})

// mongodb+srv://sreeragrajan:<password>@cluster0.bverm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0