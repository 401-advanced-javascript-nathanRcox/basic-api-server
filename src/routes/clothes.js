'use strict';

const express = require('express');
const Clothes = require('../models/clothes');
const clothes = new Clothes();
const router = express.Router();

//RESTful routes
router.get('/clothes', getClothes);
router.get('clothes/:id', getOneItemOfClothes)
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

//RESTful route handlers
function getClothes(req, res) {
  const allClothes = clothes.read();
  res.status(200).json(allClothes);
}

function getOneItemOfClothes(req, res) {
  const id = req.params.id;
  const oneItemClothing = clothes.read(id);
  res.status(200).json(oneItemClothing);
}

function createClothes(req, res) {
  const obj = req.body;
  const newClothes = clothes.create(obj);
  res.status(200).json(newClothes);
}

function updateClothes(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updatedClothes = clothes.update(id, obj);
  res.status(200).json(updatedClothes);
}

function deleteClothes(req, res) {
  const id = req.params.id;
  console.log(id);
  res.status(200).send('The item has been deleted.');
}

module.exports = router;
