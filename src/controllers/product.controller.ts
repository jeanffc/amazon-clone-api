import { Request, Response } from 'express';
import { Product } from '../models/product.model';

// TODO: review response status

export const createProduct = async (req: Request, res: Response) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send(product);
};

export const getProduct = async (req: Request, res: Response) => {
  const product = await Product.findById({ _id: req.params.id });
  res.status(200).send(product);
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find().sort({ created_on: -1 });
  res.status(200).send(products);
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).send(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  await Product.findByIdAndDelete({ _id: req.params.id });
  res.status(204).send();
};
