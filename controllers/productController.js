const Product = require("../models/Product");

const allProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};
const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).json({ product });
};

const createProduct = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const description = req.body.description;

  const product = await Product.create({ name, price, quantity, description });

  res.status(201).json({ product });
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ product });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id);
  res.status(204).send("Delete Product");
};

module.exports = {
  allProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
