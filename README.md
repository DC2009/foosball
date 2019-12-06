# Front-end test
Small project according to https://github.com/CyberVadis/front-end-take-home

## Development description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See below for more info.

In the few available hours, I managed to build a small SPA app using React with the following content:

- ES6 javascript
- React, React Router, React Hooks
- JSON
- SVG
- SCSS (variables, media queries)
  
The goal was to show as many aspects of front-end development as possible.
I realized the following:
- a lobby view with a list of players cards
- a details view for each player
- a form to create a new game with basic input verification
- a game result page

### What is missing

The program could tak advantage of some refactoring

I am not an expert of deployment and due to lack of time I resigned from deploying as required and I simply used the built in deployment tools of create-react-app
In order to run the deployed app the following steps are necessary:
- npm i -g serve 
- cd build
- serve -s -l 3000
- open a browser to localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

