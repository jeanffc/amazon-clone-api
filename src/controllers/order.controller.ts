import { Request, Response } from 'express';
import { Order } from '../models/order.model';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById({ _id: req.params.id });
    if (!order) {
      res.status(404).send({ error: 'Order not found' });
    }

    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ created_on: -1 });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndUpdate({ _id: req.params.id }, req.body);
    if (!order) {
      res.status(404).send({ error: 'Order not found' });
    }

    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndDelete({ _id: req.params.id });
    if (!order) {
      res.status(404).send({ error: 'Order not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
