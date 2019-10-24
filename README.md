# impact-dashboard
Getting started:
---

1. Install dependencies  
2. On the root directory, there should be a file named ```serverless.yml```. Open that up. 
    * In the provider section, change the profile to match the ```credentials``` file in your ```.aws``` folder
    * Change the stage to ```dev-${your name}``` if you're developing, or ```staging-1```/```staging-2``` if you are doing QA
    
Although we won't be using the queryShakespeare.js and /shakespeareQuotes endpoint, Nisa has the necessary credentials. Put them in a secrets.js file as a json object, and export it. For example:  
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

Use the command ```serverless deploy``` to deploy onto AWS. You should then see your functions under Lambda. If not, make sure your region is set to North Virginia


# Connecting BigQuery to AWS
required dependency:

- @google-cloud/bigquery (should already be installed and in the root package.json)

Take note of the secrets.js file, which is in the gitignore file so that keys aren't exposed. The credentials in secrets.js are what allows us to query against the Shakespeare public dataset.

- queryShakespeare.js: where will be setting up instructions to  querying against BigQuery public shakespeare dataset.
    - view comments in this file to get an understanding of code as it will be repeated for queries we will be making to impact bigquery db.
    - notice that where we are creating the client, we initially hard coded credentials to be able to  query against the dataset. For securities sake, we moved over the credentials into a secrets file that is then imported and used in place of hard coding the credentials.
    - look at sqlQuery. That will be the sql needed to get what information we are looking for which is looking at word count.
    - line 7 will both export the queryShakespeare file and set it up to get the query  we want( for the time being)

- navigate to handler.js
    - We are importing the queryShakespeare.js file as shakespeare to utilize that query.
    - The first two methods are just joke examples but enjoy.
    - The last method is the shakespeareQuotes
        - This is where the query will take place
        - when serverless deploy is sent to work its magic,  it should create a lambda function that will query bigquery  and send back the data we requested ( as long as the credentials are valid, which the key will be valid by the time this is a necessary read)

- once serverless deploy is working its magic, ideally it should deploy successfully. This being said we should receive urls that we can use for the GET requests later once we have the correct dataset to query against and the corresponding credentials. If you navigate to the in place GET urls, you'll see corresponding messages and details.
- I would suggest following this set of steps/files  to successfully query against the impact dataset.





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
