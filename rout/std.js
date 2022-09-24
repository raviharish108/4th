import express from "express"
import {client} from "../index.js"
const router=express.Router();
//2.
router.post('/', async function (req, res) {
    const add_students = req.body;
    console.log(add_students);
    const result = await client.db("mongodb").collection("students").insertMany(add_students);
    res.send(result);
    console.log(result);
  });
  router.post('/', async function (req, res) {
    const addone_students = req.body;
    console.log(addone_students);
    const result1 = await client.db("mongodb").collection("students").insertOne(addone_students);
    res.send(result1);
    console.log(result1);
  });

//3.
router.get('/', async function (req, res) {
    const all_students = await client.db("mongodb").collection("students").find({}).toArray();
    res.send(all_students);
    console.log(all_students);
  });

  //4.
  router.get('/:id', async function (req, res) {
    const {id}=req.params;
    const getone = await client.db("mongodb").collection("students").findOne({id:id});
    res.send(getone);
    console.log(getone);
  });

  //5.
  router.get('/', async function (req, res) {
    if (req.query.rating) {
      req.query.rating = req.query.rating * 1;
    }
    console.log(req.query);
    const one_student = await client.db("mongodb").collection("students").findOne(req.query);
    console.log(one_student);
    res.send(one_student);
  });
//6
router.delete('/:id', async function (req, res) {
  const {id}=req.params;
  const delete_one = await client.db("mongodb").collection("students").deleteOne({id:id});
  res.send(delete_one);
  console.log(delete_one);
});

//7.
router.put("/:id", async function (req, res) {
  const {id}=req.params;
  const data=req.body;
  console.log(id, data);
  const result = await client.db("mongodb").collection("students").updateOne({id:id},{$set:data});
  console.log(result);
  res.send(result);
});
export const studentsRouter=router;