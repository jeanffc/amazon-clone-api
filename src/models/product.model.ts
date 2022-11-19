import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    bodyHtml: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: true },
    images: [String],
    options: [
      {
        name: String,
        values: [String]
      }
    ],
    variants: [
      {
        title: { type: String, required: true },
        option: { type: Object },
        price: { type: Number, required: true }
      }
    ]
  },
  {
    timestamps: true
  }
);

export const Product = mongoose.model('Product', productSchema);
