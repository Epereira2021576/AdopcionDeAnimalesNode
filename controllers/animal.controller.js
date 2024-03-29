const bcryptjs = require('bcryptjs');
const Animal = require('../models/animal');
const { response } = require('express');

const animalesGet = async (req, res = response) => {
  const { limite, desde } = req.query;
  const query = { estado: true };

  const [total, animales] = await Promise.all([
    Animal.countDocuments(query),
    Animal.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.status(200).json({
    total,
    animales,
  });
};

const getAnimalById = async (req, res) => {
  const { id } = req.params;
  const animal = await Animal.findOne({ _id: id });

  res.status(200).json({
    animal,
  });
};

const animalPost = async (req, res) => {
  const { nombre, edad, tipo, estadoAdopcion } = req.body;
  const animal = new Animal({ nombre, edad, tipo, estadoAdopcion });

  await animal.save();
  res.status(202).json({
    animal,
  });
};

const animalPut = async (req, res) => {
  const { id } = req.params;
  const { _id, tipo, estado, ...resto } = req.body;
  await Animal.findByIdAndUpdate(id, resto);
  const animal = await Animal.findOne({ _id: id });
  res.status(200).json({
    msg: 'Mascot Updated',
    animal,
  });
};

const animalDelete = async (req, res) => {
  const { id } = req.params;
  const animal = await Animal.findByIdAndUpdate(id, { estado: false });
  res.status(200).json({
    msg: 'Mascot deleted',
    animal,
  });
};

module.exports = {
  animalPost,
  animalesGet,
  getAnimalById,
  animalPut,
  animalDelete,
};
