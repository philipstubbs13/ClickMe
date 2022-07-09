# ClickMe

Test your memory of NBA players with the ClickMe game. ClickMe is a memory skill application built using React. The objective of the game is to be able to go through and click each player once.

Each time you click a player, your score goes up by one. If you click a player twice, you lose and your score goes back to 0.

## Table of contents

* [Live](#live)
* [Screenshots](#screenshots)
* [About this project](#about-this-project)
* [Getting started](#getting-started)
* [Testing](#testing)
* [Deployment](#react-deployment)
* [Technologies used to create app](#technologies-used)
* [Issues](#Issues)

## <a name="live"></a>Live

<https://clickme-d27eb.web.app/>

## <a name="screenshots"></a> Screenshots

![Game Start](/readme_images/game_start.png)
![Already Clicked](/readme_images/already_clicked.png)
![You Won](/readme_images/you_won.png)

## <a name="about-this-project"></a> About this project

* [How the app works](#how-app-works)
* [How the app is built](#how-the-app-is-built)

### <a name="how-app-works"></a> How the app works

When you open the application, you will see 12 players. To start the game, click a player. Each player in the `players.json` file has a property named `clicked`. By default, each player starts out with a `clicked` value of `false`. When you click a player, the `clicked` value for that player is set to `true`. The object of the game is to click every player once. When you click a player for the first time, your score goes up by one. But, if you click a player more than once (that is, click a player with a clicked value of `true`), the score will reset, and you have to start over. When the game is reset, each player's clicked value is set back to `false`. You win the game when you click each player on the screen once (that is, every player in `players.json` has a clicked value of `true`).

### <a name="how-the-app-is-built"></a> How the app is built

This project is built using React. For more information on how this project is structured and broken into various components, see [Structure of the project](#structure-of-project).

## <a name="getting-started"></a> Getting started

The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to <https://clickme-d27eb.web.app/>.

To set up this application locally on your computer, perform the following steps:

1. [Clone the repository](#clone-repository)

2. [Install Node.js](#install-node)

3. [Install yarn](#install-yarn)

4. [Install the dependencies](#dependencies)

5. [Start the server](#start-server)

### <a name="clone-repository"></a> 1. Clone the repository

The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

```bash
  git clone https://github.com/philipstubbs13/ClickMe.git
  cd ClickMe
```

#### <a name="structure-of-project"></a> Structure of the project

After you clone the repository, navigate to the project root directory (ClickMe). The project directory structure is set up as follows:

* **public**: The public folder contains the `index.html` file. This HTML file is a template. The file is empty. So, if you open it directly in a browser, you will get an empty page. Rather than placing the HTML directly in `index.html`, this application uses a React component based architecture to create, build, and render UI components.

* **src**: In the src folder, these are the parts of the application to pay attention to.
  * **index.js:** The `index.js` file is the top level file of the React application. In `index.js`, the `App.js` file is imported, and the `ReactDOM.createRoot` method is used to render the app. Also, to manage all of the game state and logic, this application uses React's `useContext` hook. So, in this file, you will see the `App` component wrapped in a `GameContextProvider`.
  * **App.js:** The `App.js` file is where the application components are imported and rendered, such as the navigation bar, footer, and player images. This component gets the various pieces of state from the `useContext` hook. State needed for this game includes the score, top score, a player's clicked value, and message displayed in the top navigation bar.
  * **components:** The components folder is where the app components are located. Each folder represents a separate component. For example, `navbar` is the top navigation bar component.
  * **players.json:** The `players.json` file contains an array of objects. Each object is a player that gets rendered to the page. Each object contains four properties( `id`, `name`, `image`, and `clicked`). By default, `clicked` is set to `false`. When the user clicks a player, that player's clicked value gets set to `true` so that the application can keep track of which players have already been clicked and which players have not been clicked. Player state is updated using the `useContext` and `useReducer` hooks from React.
  * **package.json**: Lists the project dependencies and their version numbers.
  * **.gitignore**: Anything listed inside this file (for example, `node_modules`) will not be tracked by GitHub when code is committed.
  * **yarn.lock**: Dependency tree for the project. Lists all the dependencies and their versions.

### <a name="install-node"></a> 2. Install Node.js

If you don't already have Node.js installed on your computer, you can install the latest version here: <https://nodejs.org/en/>.

### <a name="install-yarn"></a> 3. Install yarn

To be able to install the dependencies and start the application locally, you will need to install yarn. Yarn is a package manager like npm.

To install yarn, run the following command:

```bash
  npm install -g yarn
```

For more information about yarn and other installation options, see the yarn documentation: <https://yarnpkg.com/en/>.

### <a name="dependencies"></a> 4. Install the dependencies

This project uses React.

After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required dependencies.

```bash
yarn
```

Version information for each of these packages is available in the **package.json** file in the project root directory.

### <a name="start-server"></a> 5. Start the application</a>

After performing all of the setup steps in the **Getting started** section, navigate to the project root directory (ClickMe) and run the following command to start the application:

```bash
yarn start
```

To verify that the application has started and is working locally on your computer, open Chrome and go to <http://localhost:3000>.

## <a name="testing"></a> Testing

This project uses the `jest` test runner.  In addition, for testing components in isolation, this project uses `react-testing-library`, which
is a library for testing React components in a way that resembles the way the components are used by end users.

To run the tests for this project, run the following command from the project root directory:

```bash
yarn test
```

This command launches `jest` in watch mode (that is, every time you save a file, it will re-run the tests).

To generate a test coverage report for this project, run the following command from the project root directory:

```bash
yarn coverage
```

Tests are located in a `__tests__` folder next to the code/file the tests are testing.


## <a name="react-deployment"></a> Deployment

This app is deployed and hosted using Firebase hosting.

This project uses GitHub Actions to automatically deploy the app to production when a pull request is merged into `main`.

To manually deploy this app, perform the following steps:

* Navigate to the root directory (ClickMe) of this project.
* If not already installed, install the Firebase CLI tools globally:

```bash
npm install -g firebase-tools
```

* Log in to Firebase:

```bash
firebase login --interactive
```

Note that if you were already logged in, you might need to reauth instead:

```bash
firbase --reauth
```

* Create a production build of the app:

```bash
yarn build
```

* Deploy the app:

```bash
firebase deploy
```

Verify deploy was successful by navigating to [hosting URL](https://clickme-d27eb.web.app/).

## <a name="technologies-used"></a> Technologies used to build app

* HTML
* CSS
* [Bootstrap](http://getbootstrap.com/)
* Javascript
* [React](https://reactjs.org/)
* [jest](https://jestjs.io/)
* [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## <a name ="Issues"></a> Issues

If you find an issue while using the app or have a request, log the issue or request [here](https://github.com/philipstubbs13/ClickMe/issues/). These issues will be addressed in a future code update.
