# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# The Client for My Java Blog
# Project Milestones: 
<ul> 
    <li> Creating project milestones</li> 
    <li> Creating Data folder with sample of data we expect from the Backend </li> 
    <li> Creating Data File containing Sample of JSON Data that we will be receiving from the Backend </li> 
    <li> Creating Interfaces Folder that will contain Interfaces for the data we are expecting </li> 
    <li> Creating Handler Functions that take care of data fetching in different pages, they will be in a data fetching "handlers" directory and imported as necessary where needed </li> 
    <li> Customizing existing functions to handle & render fetched Data </li> 
    <li> Plugging in The Backend and checking to see if the functions from the simulated Data hold up </li> 
    <li>Completion of First iteration, improve functionality on the backend and add more iterations </li> 
</ul> 
