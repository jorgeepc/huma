# HUMA

## A powerful starter template for RESTful Web Services with TypeScript 🌽

# Getting started

- Clone the repository

```
git clone https://github.com/jorgeepc/huma.git <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Clone the `.env.example` file to `.env`, and add your own variables

```
cp .env.example .env
```

- Build and run the project

```
npm run build
npm start
```

- If you are developing you could run in watch mode

```
npm run watch
```

- To run your tests

```
npm test
```

Finally, post a user to `http://localhost:3000/users` and you should see our example endpoint being served locally!

# Project Structure

Because we are using TypeScript, we need to separate folders for the _source_ and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.

| Name                    | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| **.vscode**             | Contains VS Code specific settings                                                             |
| **dist**                | Contains the distributable (or output) from your TypeScript build. This is the code you ship   |
| **node_modules**        | Contains all your npm dependencies                                                             |
| **src**                 | Contains your source code that will be compiled to the dist dir                                |
| **src/api**             | API related code, contains your routes definition and controllers                              |
| **src/api/controllers** | Contains your controllers functions that respond to http requests                              |
| **src/api/routes**      | Contains your routes definition                                                                |
| **src/config**          | Load config environment variables                                                              |
| **src/loaders**         | Contains the startup process of your node server                                               |
| **src/models**          | Contains TypeScript interfaces                                                                 |
| **src/schemas**         | Contains mongoose schemas                                                                      |
| **src/types**           | Holds .d.ts files not found on DefinitelyTyped.                                                |
| **src/utils**           | Contains some utilities, like an error handler, formatter and a logger                         |
| **src/app.ts**          | Express app initialization                                                                     |
| **src/server.ts**       | Entry point to your express app                                                                |
| **test**                | Contains your tests. Separate from source because there is a different build process.          |
| **.env.example**        | API keys, tokens, passwords, database URI. Clone this, but don't commit it in to public repos. |
| **.eslintignore**       | Config settings for paths to exclude from linting                                              |
| **.eslintrc**           | Config settings for ESLint code style checking                                                 |
| **.prettierignore**     | Config settings for paths to exclude from prettier                                             |
| **.prettierrc**         | Config settings for Prettier code style formatter                                              |
| **jest.config.js**      | Used to configure Jest running tests written in TypeScript                                     |
| **package.json**        | File that contains npm dependencies as well as build scripts                                   |
| **tsconfig.json**       | Config settings for compiling server code written in TypeScript                                |

# Roadmap

- [x] MongoDB integration
- [x] Tests examples
- [x] JWT auth
- [ ] Continuous integration with CircleCI
- [ ] Continuous delivery with CircleCI
