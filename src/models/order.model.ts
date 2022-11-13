import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    order_items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, min: [1, 'Quantity can not be less then 1.'] }
      }
    ],
    total_price: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

export const Order = mongoose.model('Order', orderSchema);
