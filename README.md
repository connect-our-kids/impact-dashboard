# impact-dashboard
Getting started:
---

1. Install the dependencies in the root directory and in the client folder.
2. On the root directory, there should be a file named ```serverless.yml```. Open that up. 
    * In the provider section, change the profile to match your ```credentials``` file in your ```.aws``` folder
    * Change the stage to ```dev-${your name}``` if you're developing, or ```staging-1```/```staging-2``` if you are doing QA
    
Although we won't be using the queryShakespeare.js and /shakespeareQuotes endpoint, Nisa has the necessary env credentials. Put these in a .env file at the same level as .gitignore (which should be set to not push .env). Sample:
big_query_type=service_account  
big_query_project_id=bigqueryshakespeare  
big_query_private_key_id=  
big_query_private_key=  
big_query_client_email=  
big_query_client_id=  
big_query_auth_uri=  
big_query_token_uri=  
big_query_auth_provider_x509_cert_url=  
big_query_client_x509_cert_url=  


Use the command ```serverless deploy``` to deploy onto AWS. You should then see your functions under Lambda. If not, make sure your region is set to North Virginia
