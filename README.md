# Installation
# Redux Toolkit
Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect).

It's available as a package on NPM for use with a module bundler or in a Node application:

# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit

It's also available as a UMD build, which can be loaded from the dist folder on unpkg. The UMD builds make Redux Toolkit available as a window.RTK global variable.

Redux Core
To install the stable version:

# NPM
npm install redux

# Yarn
yarn add redux

If you're not, you can access these files on unpkg, download them, or point your package manager to them.

Most commonly, people consume Redux as a collection of CommonJS modules. These modules are what you get when you import redux in a Webpack, Browserify, or a Node environment. If you like to live on the edge and use Rollup, we support that as well.

If you don't use a module bundler, it's also fine. The redux npm package includes precompiled production and development UMD builds in the dist folder. They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a <script> tag on the page, or tell Bower to install it. The UMD builds make Redux available as a window.Redux global variable.

The Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in any modern browser. You don't need to use Babel or a module bundler to get started with Redux.

# Complementary Packages
Most likely, you'll also need the React bindings and the developer tools.

# npm install react-redux
npm install --save-dev @redux-devtools/core

Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like Webpack and Browserify for the most comfortable development experience.

# Create a React Redux App
The recommended way to start new apps with React and Redux is by using the official Redux+JS template or Redux+TS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.

# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript