# Introduction

AspNetCore React Redux template converted to Javascript (ES6) from Typescript

# Changes

v1.0.0

1. Update packages to latest verion
2. Update build process (see [Build](#build))
3. Add `dotnet watch` to build process
4. Convert TypeScript codes to Javascript 6 codes
5. Add `eslint`
6. Make `npm install` during the `dotnet publish` command only run when
   `node_modules` folder does not exist

# Getting Started

* Run `npm i` to install packages

# Build

| Command            | Note                                                                                                 |
| :----------------- | :--------------------------------------------------------------------------------------------------- |
| `npm start`        | Start and dev build and watch (both C# and Javascript changes)                                       |
| `npm run lint`     | Lint the Javacript code                                                                              |
| `npm run lint:fix` | Auto fix lint                                                                                        |
| `npm run build`    | Create production build. _Note:_ Remenber to change the build output location in `package.json` file |

# Contribute

TODO: Explain how other users and developers can contribute to make your code
better.

If you want to learn more about creating good readme files then refer the
following
[guidelines](https://www.visualstudio.com/en-us/docs/git/create-a-readme). You
can also seek inspiration from the below readme files:

* [ASP.NET Core](https://github.com/aspnet/Home)
* [Visual Studio Code](https://github.com/Microsoft/vscode)
* [Chakra Core](https://github.com/Microsoft/ChakraCore)
