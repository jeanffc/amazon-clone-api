## Quick Start

Install dependecies:

```
npm i
```

## Commands

Running:

```
yarn start
```

Running locally:

```
yarn start:dev
```

## API Documentation

List of available routes:

#### Orders routes:

`POST /v1/orders/` - create order

`GET /v1/orders/` - get orders

`GET /v1/orders/:orderId` - get order by id

#### Products routes:

`POST /v1/products` - create a product

`GET /v1/products` - get all products

`GET /v1/products/:productId` - get product by id

`PUT /v1/products/:productId` - update product by id

`DELETE /v1/products/:productId` - delete product by id

## Project Structure

```
src\
|--config\ # Base onfigurations
|--controllers\ # Route controllers (controller layer)
|--docs\ # Swagger files
|--middlewares\ # Custom express middlewares
|--models\ # Mongoose models (data layer)
|--routes\ # Routes
|--services\ # Business logic (service layer)
|--utils\ # Utility classes and functions
|--validations\ # Request data validation schemas
|--app.ts # Express app
|--server.ts # Entry point
```

## TODO

- [x] Config Create endpoints for Products
- [x] Config Create endpoints for Orders
- [ ] Config ESLint
- [x] Config Prettier
- [x] Config Editor config
- [x] Config Cors
- [x] Config Logger
- [x] Config Helmet
- [x] Config Error handling
- [ ] Config Rate Limit
- [ ] Config Dotenv
- [ ] Create Documentation
- [ ] Create Tests
- [ ] Create Docker
