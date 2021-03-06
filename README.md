# impact-dashboard


|                                             [Sean Wu](https://github.com/seanwu20)                                     |                                              [Matt Herich](https://github.com/mjherich)                                              |                                                          [Nisa Champagne](https://github.com/nisaChampagne)                                                           |                                       [Eleasah Halsmer](https://github.com/ehalsmer)                                                            | |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/42618627?s=400&u=fb9268698479b77a4ae4117124b59f615f21ad45&v=4" width = "250" />](https://github.com/seanwu20) |       [<img src="https://avatars1.githubusercontent.com/u/8888824?s=400&v=4" width = "250" />](https://github.com/mjherich)       | [<img src="https://avatars3.githubusercontent.com/u/50988313?s=460&v=4" width = "250" />](https://github.com/nisaChampagne) |       [<img src="https://avatars1.githubusercontent.com/u/44128101?s=460&v=4" width = "250" />](https://github.com/ehalsmer)  ||
|                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/seanwu20)                           |                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mjherich)                        |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/nisaChampagne)                                       |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ehalsmer)                   ||
|    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/seanwu20/)     | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/matt-herich-41246082/) |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/nisa-champagne-32782b182/)                 | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ehalsmer/)||
<br>
<br>

|                                             [Patrick Gordon](https://github.com/patrick-gordon)                                     |                                              [Desiree Morris](https://github.com/desiquinn)                                              |                                                          [Judy Ghashim](https://judeux.me/)                                                           |                                       [Diane Myers](https://dianemyers26.wixsite.com/website)                                       |                                                                |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/T4JUEB3ME-UGZ4URFT7-9d207db555dd-512" width = "250" />](https://github.com/patrick-gordon) |       [<img src="https://avatars0.githubusercontent.com/u/49598516?s=460&v=4" width = "250" />](https://github.com/desiquinn)                       | [<img src="https://media.licdn.com/dms/image/C4E03AQF4Cj4eh-pVLA/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=aDIKFtrrIgGwS3BcxF1cuMVWCBSiChZA3LVWO3CDqYE" width = "250" />](https://judeux.me/) |       [<img src="https://ca.slack-edge.com/T4JUEB3ME-UJ35JC0N5-b9d2c62f9779-512" width = "250" />](https://dianemyers26.wixsite.com/website)        |                                                            |
|                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/patrick-gordon)                           |                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/desiquinn)                        |                                       [<img src="https://i7.pngguru.com/preview/756/872/874/computer-icons-web-development-world-wide-web.jpg" width="15"> ](https://judeux.me/)                                       |                   [<img src="https://i7.pngguru.com/preview/756/872/874/computer-icons-web-development-world-wide-web.jpg" width="15"> ](https://dianemyers26.wixsite.com/website)                   |                                              |
|    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ]()                                                       | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/desiree-morris/) |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/judyghashim/)                 | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/diane-myers-bb1431120/) |
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
