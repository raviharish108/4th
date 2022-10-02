import express from "express"
import {client} from "../index.js"
const router=express.Router();
//2.
router.post('/', async function (req, res) {
    const add_products = req.body;
    console.log(add_products);
    const result = await client.db("mongodb").collection("products").insertMany(add_products);
    res.send(result);
    console.log(result);
  });


export const productRouter=router;