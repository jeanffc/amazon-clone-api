import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../src/config/database';
import { Product } from '../src/models/product.model';

(async () => {
  await connectDB();
  await main();
  await disconnectDB();
  process.exit();
})();

export async function clear() {
  console.log('Running clear()');
  await mongoose.connection.db.dropDatabase();
}

export async function create() {
  const productTShirt = new Product({
    title: 'T-Shirt',
    bodyHtml: '<p>My t-shirt description</p>',
    slug: 't-shirt',
    image: 'https://i.picsum.photos/id/237/600/700.jpg?hmac=LbMfCusgfPyH5oAbos3QYUGG8B4fctY9eYFWfhKAdqE',
    variants: [
      {
        title: 't-shirt black light cotton',
        colour: 'black',
        material: 'light cotton',
        price: 16.95
      },
      {
        title: 't-shirt white light cotton',
        colour: 'white',
        material: 'light cotton',
        price: 16.95
      },
      {
        title: 't-shirt black heavy cotton',
        colour: 'black',
        material: 'heavy cotton',
        price: 19.95
      },
      {
        title: 't-shirt white heavy cotton',
        colour: 'white',
        material: 'heavy cotton',
        price: 19.95
      },

      {
        title: 't-shirt green light cotton',
        colour: 'green',
        material: 'light cotton',
        price: 18.95
      },
      {
        title: 't-shirt red light cotton',
        colour: 'red',
        material: 'light cotton',
        price: 18.95
      },
      {
        title: 't-shirt green heavy cotton',
        colour: 'green',
        material: 'heavy cotton',
        price: 21.95
      },
      {
        title: 't-shirt red heavy cotton',
        colour: 'red',
        material: 'heavy cotton',
        price: 21.95
      }
    ]
  });

  await productTShirt.save();

  const productSweater = new Product({
    title: 'Sweater',
    bodyHtml: '<p>My sweater description</p>',
    slug: 'sweater',
    image: 'https://i.picsum.photos/id/1025/600/700.jpg?hmac=HmZsOIOm8uPcbbDxEFX0P0DqyQZUAPk2Z3vWNQlZ2D0',
    variants: [
      {
        title: 'sweater black',
        colour: 'black',
        price: 28.95
      },
      {
        title: 'sweater white',
        colour: 'white',
        price: 28.95
      },
      {
        title: 'sweater pink',
        colour: 'pink',
        price: 32.95
      },
      {
        title: 'sweater yellow',
        colour: 'yellow',
        price: 32.95
      }
    ]
  });

  await productSweater.save();
}

export async function main() {
  const args = process.argv;
  const action = args[2];

  switch (action) {
    case 'create':
      await clear();
      await create();
      break;
    case 'clear':
      await clear();
      break;
    default:
      break;
  }
}
