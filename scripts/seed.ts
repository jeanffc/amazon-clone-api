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
    options: [
      {
        name: 'colour',
        values: ['black', 'white', 'green', 'red']
      },
      {
        name: 'material',
        values: ['light cotton', 'heavy cotton']
      },
      {
        name: 'custom',
        values: []
      }
    ],
    variants: [
      {
        title: 't-shirt black light cotton',
        option: {
          colour: 'black',
          material: 'light cotton'
        },
        price: 16.95
      },
      {
        title: 't-shirt white light cotton',
        option: {
          colour: 'white',
          material: 'light cotton'
        },
        price: 16.95
      },
      {
        title: 't-shirt black heavy cotton',
        option: {
          colour: 'black',
          material: 'heavy cotton'
        },
        price: 19.95
      },
      {
        title: 't-shirt white heavy cotton',
        option: {
          colour: 'white',
          material: 'heavy cotton'
        },
        price: 19.95
      },

      {
        title: 't-shirt green light cotton',
        option: {
          colour: 'green',
          material: 'light cotton'
        },
        price: 18.95
      },
      {
        title: 't-shirt red light cotton',
        option: {
          colour: 'red',
          material: 'light cotton'
        },
        price: 18.95
      },
      {
        title: 't-shirt green heavy cotton',
        option: {
          colour: 'green',
          material: 'heavy cotton'
        },
        price: 21.95
      },
      {
        title: 't-shirt red heavy cotton',
        option: {
          colour: 'red',
          material: 'heavy cotton'
        },
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
    options: [
      {
        name: 'colour',
        values: ['black', 'white', 'pink', 'yellow']
      }
    ],
    variants: [
      {
        title: 'sweater black',
        option: {
          colour: 'black'
        },
        price: 28.95
      },
      {
        title: 'sweater white',
        option: {
          colour: 'white'
        },
        price: 28.95
      },
      {
        title: 'sweater pink',
        option: {
          colour: 'pink'
        },
        price: 32.95
      },
      {
        title: 'sweater yellow',
        option: {
          colour: 'yellow'
        },
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
