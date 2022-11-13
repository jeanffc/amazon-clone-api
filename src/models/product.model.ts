import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    body_html: { type: String, required: true },
    image: { type: String, required: true },
    images: [String],
    variants: [
      {
        title: { type: String, required: true },
        colour: String,
        material: String,
        price: { type: Number, required: true }
      }
    ]
  },
  {
    timestamps: true
  }
);

export const Product = mongoose.model('Product', productSchema);
