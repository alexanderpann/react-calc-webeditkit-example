# calc-webeditkit-example

This is an example of web editor for MPS.

To make it work you need [MPS Server](https://github.com/Strumenta/MPSServer). The example uses the [WebEditKit](https://github.com/Strumenta/webeditkit) framework, which is available on NPM.

## Verify MPS Server is working

1. clone the repo (https://github.com/Strumenta/MPSServer)
2. if you had cloned before run a git pull and clean everything (git clean -fdX)
3. execute './gradlew runLauncher'
4. visit http://localhost:2904/modules 
   -> You should see a large JSON file, this means MPS Server can get the list of modules 
5. visit http://localhost:2904/models/com.strumenta.financialcalc.sandbox.company/324292001770075100
   -> You should see JSON data describing the root node used in the example, this means MPS Server is exposing it correctly

## Verify calc-webeditik-example is working 

We will be using the version of WebEditKit released on NPM, instead of building it ourselves.

1. clone the repo (https://github.com/Strumenta/calc-webeditkit-example)
2. if you had cloned before run a git pull and clean everything (git clean -fdX)
3. execute `npm install` or `yarn`
4. execute `npm start` or `yarn start`
5. the browser opens automatically#
6. edit the name of the calculations
7. reload the page
   -> You should see the name of the calculations as you changed, it means the MPS models have been actually changed

## Integrate MPS Server into your system

You want to typically edit your own solutions using your own languages.

The simplest way to do so is to create a project, include the MPS Server modules in it, and launch MPS Server from the MPS IDE (look for "Launch MPS Server" in your menu).

## Build your own editors

You can build your own editors, using the WebEditKit framework. Take inspiration from what you see in calc-webeditkit-example, looks for different types of cells in the source of WebEditKit.

# Give feedback

This is in a very early development stage, so please share your thoughts and provide feedback writing at federico@strumenta.com

<br />

# React
This project uses the js library react. The following sections explains Create React App.
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
