# react-vanilla-css-project

## Create a scaffholding Vite project
Run on console
```js
npm create vite@4.1.0
Need to install the following packages:
  create-vite@4.1.0
Ok to proceed? (y) y
✔ Project name: … vanilla-css
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```

## Install Node Packages
```js
cd vanilla-css
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
This sample project demonstrates the styling using - 
1. `Vanilla CSS` - *With vanilla CSS, we write our component styles in a separate CSS file and import it into the component file. However, we may encounter conflicts if the same CSS classes are defined in multiple files*
2. `CSS modules` - *CSS modules resolve this issue by generating unique class names during the build process*
3. `CSS-in-JS` - *With CSS-in-JS, we define all the styles for a component alongside its code. Like CSS modules, this provides scoping for CSS classes and eliminates conflicts. It also makes it easier for us to change or delete a component without affecting other components*
4. `CSS Libraries` - Styled components, Emotion, Polished are the popular libraries. For this demo we use `npm install styled-components`
5. Inline CSS - *Although inline styles are easy to apply, they can make our code difficult to maintain over time and should only be used as a last resort*
6. Icons using `react-icons` https://react-icons.github.io/react-icons/ `npm install react-icons@4.7.1`
7. Other CSS Libraries - *There are several UI libraries available that can assist us in quickly building beautiful and modern applications. Some popular options include Bootstrap, Material UI, TailwindCSS, DaisyUI, ChakraUI, and more*
