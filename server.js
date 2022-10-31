import 'dotenv/config';
import express from "express";
import pg from "pg";
import cors from "cors";
import userRouter from './routes/userRoutes.js';

// import routes;
const port = process.env.PORT || 8080;
const { Pool, Client } = pg;
const app = express();

app.get('/', (req, res) => res.status(200).json({
  hello: "Welcome to the users' db "
}))

app.use(cors());
app.use(express.json())
app.use('/users', userRouter)

app.listen(port, () => console.log(`listening to ${port}`))


