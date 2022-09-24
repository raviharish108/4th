import express from "express"
import { MongoClient } from "mongodb";
import {studentsRouter} from "./rout/std.js";
import * as dotenv from "dotenv";
dotenv.config();
// const express = require('express')
const app = express()
const PORT=process.env.PORT;
const  MONGO_URL=process.env.URL;
 async function createConnection() {
 const client = new MongoClient(MONGO_URL); 
 await client.connect(); 
 console.log("Mongo is connected ✨🎊😎");
 return client;
 }

export const client=await createConnection();
 app.use(express.json());
// 1.
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use('/students',studentsRouter)
app.listen(PORT,()=>{
    console.log("done");
})

