import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    user: { type: String, required: true, default: '1' }, // NOTE: for this exercise the user is always the same
    orderItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        variantId: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, min: [1, 'Quantity can not be less then 1.'] }
      }
    ],
    totalPrice: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

export const Order = mongoose.model('Order', orderSchema);
