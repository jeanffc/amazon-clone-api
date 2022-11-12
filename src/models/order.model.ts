import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: {
    type: String
  },
  products: [
    {
      productId: String,
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
      },
      price: Number
    }
  ],
  bill: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

export const Order = mongoose.model('Order', orderSchema);
