# Groupon-App - Customer Review Component (CRC)

This front-end React component will emulate the customer reviews from a product page on Groupon.com. This includes the reviews average, and each individual customer review (including the customer's name and extended profile (i.e. total number of reviews/ratings, helpfulness), review text for the product, and the review's helpfulness).

A back-end is also included in this repo to correctly handle routes to `/api/:productId`, and to serve review data to the front-end component.

## Related Projects

Other service components related to this can be found at https://github.com/coupon-app

These include:
  - https://github.com/coupon-app/service-image-carousel
  - https://github.com/coupon-app/service-deals

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Ensure your MongoDB service is running.
```sh
$ npm run build-reviews
```
(Seperate terminal)
```sh
$ npm run start-reviews
```

Navigate to `http://localhost:3001`

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node (any recent version > 6)

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

