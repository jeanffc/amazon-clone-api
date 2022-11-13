import { Request, Response } from 'express';
import { Product } from '../models/product.model';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    if (!product) {
      res.status(404).send({ error: 'Product not found' });
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ created_on: -1 });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
    if (!product) {
      res.status(404).send({ error: 'Product not found' });
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: req.params.id });
    if (!product) {
      res.status(404).send({ error: 'Product not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
