import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json({}))

app.use(express.urlencoded({ extended: true}))

app.use(express.static('public'))

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Server is running!');
});
//routes import

import userRouter from "./routes/user.routes.js";

//routes declaration

app.use('/api/v2/users', userRouter);




export default app;