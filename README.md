# E-commerce React Redux App

This project is a simple e-commerce web application built with React, Redux, and Redux Toolkit. It demonstrates product listing, cart management, and basic CRUD operations for products.

## Features

- Product listing with images, categories, and ratings
- Add, edit, and remove products (admin functionality)
- Shopping cart with add/remove functionality
- State management using Redux Toolkit
- Responsive and modern UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```
   git clone <https://github.com/anuragrajuv/ecommerceRedux.git>
   cd ecommerce-react-redux
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Builds the app for production.
- `npm run eject` — Ejects the app (not reversible).

## Project Structure

- `src/` — Main source code
  - `components/` — Reusable UI components (Cart, Loader, Nav, ProductCard, ProductList)
  - `Pages/` — Page components (Home, AddProduct)
  - `redux/` — Redux slices for cart and products
  - `app/store.js` — Redux store configuration
- `public/` — Static assets and HTML template
- `db.json` — Mock database for products

## Learn More

- [React documentation](https://reactjs.org/)
- [Redux documentation](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
