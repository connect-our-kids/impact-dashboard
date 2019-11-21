# impact-dashboard


|                                             [Sean Wu](https://github.com/seanwu20)                                     |                                              [David Lam](https://github.com/DavidLam89)                                              |                                                          [Jordan Stoddard](https://github.com/Jordan-Stoddard)                                                           |                                       [Gabe Samaniego](https://github.com/gsamaniego41)                                       |                                                [Peter Murphy](https://github.com/ptrfrncsmrph)                                                |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://pbs.twimg.com/profile_images/1099429898144366592/snfPARcP_400x400.png" width = "250" />](https://github.com/seanwu20) |       [<img src="https://avatars0.githubusercontent.com/u/19841364?s=400&v=4" width = "250" />](https://github.com/DavidLam89)       | [<img src="https://avatars0.githubusercontent.com/u/42726527?s=400&u=a74e6efa13ba1cac3a1a78534cbb0e0f2339523e&v=4" width = "250" />](https://github.com/Jordan-Stoddard) |       [<img src="https://avatars0.githubusercontent.com/u/35754959?s=400&v=4" width = "250" />](https://github.com/gsamaniego41)        |                              [<img src="https://avatars1.githubusercontent.com/u/26548438?s=400&v=4" width = "250" />](https://github.com/ptrfrncsmrph)                              |
|                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/adventurini)                           |                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/DavidLam89)                        |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Jordan-Stoddard)                                       |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gsamaniego41)                   |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ptrfrncsmrph)                           |
|    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anthony-v-7a18bb111/)     | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/david-lam-462149183/) |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ronald-libago-96487815b/)                 | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gabriel-samaniego-69525239/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/peter-murphy-3b6949b9//) |
<br>
<br>



Deploying:
---

1. Install dependencies, AWS CLI (`https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
`) and Serverless `npm i -g server less`
    * Create an `.env` file in root directory.
    * Set `AWS_PROFILE` to the aws profile that you want to use for deployment (should be in `.aws/credentials`).
    * Set `REACT_APP_STAGE`, should only contain text and dashes.
    * Set `PUBLIC_URL` to be the stage name wrapped in slashes. Format here is important and required for assets to be loaded properly in the built index.html file.
    * Your `.env` file should now closely match `.env.sample`

2. Create a secrets.js for Google BigQuery stuff
    ```
    const bigQueryCredentials = {
        type: "service_account",  
        project_id: "",  
        private_key_id: "",  
        private_key: "",  
        client_email: "",  
        client_id: "",  
        auth_uri: "",  
        token_uri: "",  
        auth_provider_x509_cert_url: "",  
        client_x509_cert_url: ""  
    }  
    
    module.exports = bigQueryCredentials  
    ```

3. Use the command ```yarn build:deploy``` to deploy onto AWS. You should now be able to see all your functions on AWS. Make sure your region is set to North Virginia


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Auth0
​
We are using the implicit grant user authentication flow provided by the Auth0 Single Page App SDK (https://auth0.com/docs/libraries/auth0-spa-js). Notice the files `auth0-wrapper.js` and `auth_config.js`. This is where the Auth0 client is initialized and the domain/clientId are stored.
​
## Using the useAuth0 Hook
​
You are able to access user information and logged in status with the `useAuth0()` custom hook which is defined in the wrapper.
​
Example:  `const { user, loggedIn } = useAuth0()`


## Testing 

No testing as of yet, but there is a example test in the test folder


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `yarn build:dev`

Builds a dev environment. The backend will depend on what your serverless.yml has specified. The frontend will go to [http://localhost:3000](http://localhost:3000)


### `yarn build:deploy`
Builds the react app with properly configured react router basename and auth0 redirect URI. Make sure your aws credentials are added and the `.env` file is properly configured.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
