// This function fetches data from the Shakespeare public dataset on Google BigQuery. We can use a similar function to fetch data from ConnectOurKids once it's available

'use strict';

    // Import the Google Cloud client library
    require('dotenv').config()
    const {BigQuery} = require('@google-cloud/bigquery');
    
    
    exports.queryShakespeare = async function() {
        // Queries a public Shakespeare dataset.
        const projectId = "bigqueryshakespeare";    

        // Create a client
        const bigqueryClient = new BigQuery({
            projectId: projectId,
            credentials: {
                type: process.env.big_query_type,
                project_id: process.env.big_query_project_id,
                private_key_id: process.env.big_query_private_key_id,
                private_key: process.env.big_query_private_key,
                client_email: process.env.big_query_client_email,
                client_id: process.env.big_query_client_id,
                auth_uri: process.env.big_query_auth_uri,
                token_uri: process.env.big_query_token_uri,
                auth_provider_x509_cert_url: process.env.big_query_auth_provider_x509_cert_url,
                client_x509_cert_url: process.env.big_query_client_x509_cert_url
            }
        });

        // The SQL query to run
        const sqlQuery = `SELECT word, word_count
            FROM \`bigquery-public-data.samples.shakespeare\`
            WHERE corpus = @corpus
            AND word_count >= @min_word_count
            ORDER BY word_count DESC`;

        const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
        params: {corpus: 'romeoandjuliet', min_word_count: 250},
        };

        // Run the query
        const [rows] = await bigqueryClient.query(options);

        console.log('Rows:');
        rows.forEach(row => console.log(row));
    }



