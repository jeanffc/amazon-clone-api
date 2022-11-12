import { Request, Response } from 'express';
import { Order } from '../models/order.model';

// TODO: review response status

export const createOrder = async (req: Request, res: Response) => {
  const order = new Order(req.body);
  await order.save();
  res.status(200).send(order);
};

export const getOrder = async (req: Request, res: Response) => {
  const order = await Order.findById({ _id: req.params.id });
  res.status(200).send(order);
};

export const getOrders = async (req: Request, res: Response) => {
  const orders = await Order.find().sort({ created_on: -1 });
  res.status(200).send(orders);
};

export const updateOrder = async (req: Request, res: Response) => {
  const order = await Order.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).send(order);
};

export const deleteOrder = async (req: Request, res: Response) => {
  await Order.findByIdAndDelete({ _id: req.params.id });
  res.status(200).send();
};
