import express from 'express';
import {MongoDB_URL, PORT} from './config.js'
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	// console.log(req.query);
	res.status(234).send("MERN App Start");
})

mongoose.connect(MongoDB_URL)
	.then(() => {
	console.log("MongoDB Connected");
	app.listen(PORT, () => {
		console.log(`Backend start at Port ${PORT}`)
	})
}).catch((err) => {
	console.log(err);
})
