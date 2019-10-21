# impact-dashboard
Getting started:
---

1. Install the dependencies in the root directory and in the client folder.
2. On the root directory, there should be a file named ```serverless.yml```. Open that up. 
    * In the provider section, change the profile to match your ```credentials``` file in your ```.aws``` folder
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
