import express, {Request, Response}  from "express";
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db = require('./config/database');

const app = express();
dotenv.config();


app.get("/", (req:Request, res: Response) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

db()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});