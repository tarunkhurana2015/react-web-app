# forms

## Create a scaffholding Vite project

Run on console

```js
npm create vite@4.1.0
Need to install the following packages:
  create-vite@4.1.0
Ok to proceed? (y) y
✔ Project name: … forms
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```

## Install Node Packages

```js
cd forms
npm install
```

## Run the node server

Open Visual studio, inside the terminal
`npm run dev`

## Install useful Extension

1. ES7+ React/Redux/React-Native snippets
2. Prettier - Code formatter

## Supporting Tools

1. https://babeljs.io
2. React Developer Tools for chrome

## Code Objective

This sample project demonstrates the `Form` building using -

1. `useRef` from `react` - Add `event.preventDefault();` to prevent the form from refreshing on submit.
2. `useState` hook from `react` - The state is updating on every character enterted.
3. `useForm` hook from `react` - Enables error handling for free. `npm i react-hook-form@7.43`
4. `shema based vlaidation` - `npm i zod@3.20.6` and `npm i @hookform/resolvers@2.9.11`. https://zod.dev
