'use strict';

    // Import the Google Cloud client library
    const {BigQuery} = require('@google-cloud/bigquery');
    
    
    exports.queryShakespeare = async function() {
        // Queries a public Shakespeare dataset.
        const projectId = "bigqueryshakespeare";    

        // Create a client
        const bigqueryClient = new BigQuery({
            projectId: projectId,
            credentials: {
                type: "service_account",
                project_id: "bigqueryshakespeare",
                private_key_id: "2d90e443e64e0321d3d50d3f45e50bb6bf2dd4c3",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCNDjkT1ScRIaWv\nDgG5XCjI10435PwevPa2YLGU43pS1BL0bx9D0VYfjI/9JhMMAf8gIsUEskXygfdu\nW2/bbfqXvoItfy5ejUp64IG2rKlfkwr6TlYF5F2DOPSEvDy3UhjJTqCmq9uSrNWL\n49Ml+7NP1Nz5OIgTcDMM81rDMBXB7tLFNsSsE3z101OGunsr+t+4XGmkLJ4KBUe9\nEvIxXkOnWbVt6nU1GImo9snp4HUbHJSWbzOjarIVTAwyVWiSAj2CK6u9RPeSxR3q\nAH1Ze0y+aPiMl8E0u3t2BBFl+zUIFL4ygEJn5LE/kDI6NhXTLc8WL4Oet5mX4Fpm\nzXMpSHBxAgMBAAECgf8VHwwXltNCvXG8b1x9ZPoLw4by16w+Q2Kt7HdVfrp9Ae8q\nACRZA1TiDyorEzMcQ9rv9O+LbyZffxaNxSNQDX0jO7jtFx4vtPhyGIFT2TGDc4Ex\nTzQ9AvT9sTRBVpkWL4oxRT9ztZ2ArmCg5ycMM6RQpTnGwlrzONnBbASAiwgMVyhI\n6cHYeXvOAfA3XYk7wfgB9O7rXsvUGUiF+60i6Shzc84yevSo1bchPrN3/3QwpzF8\nUqT99eX8H8JWSt8EVAm2Adkw+9eESft4tBquGBKuPZ5Y3nAFnpJY9a2zH4adjst5\nXSSb1lYnJ+u36TnL8SqWW96yjKs/iuQYuhlVxCUCgYEAw+RSN/HR5nmNCeeuQEjh\nlRGHJWfj+uWpxcWo5IVQ6rBoPlrGu3F7X4dMyGqV6V/HtfLFPDhWEhQSULQPkRq+\nH055pR6qi980gC2MijbMSePI4zI+5E3JyNA2Z0z68l4BAjNXUR0Mooun7tdydPZr\n7mh3z564sEvUYZcle5mvpx8CgYEAuFZnm7IHvLClf8dQqqUIW80sen0J+tuZF2lk\nRIa9d/CkEMn/FlN7fvVoWjoRLzUNTQRkFrTz9y/S0OaN6W9BhpDjt2FkxdrCtZi1\nHRh0jmBSZgS6BbNdCa+chE2Gi6UQ/pEFqAO9tbmF0rHM59K7ckp8/0+PYttUgMlN\nnhqDxm8CgYAWqa2RZ1qfTWSxxqn0KfpfIp3+B9zqQ/O2O73kYkAQRsRoolvnh6N8\nU8zgSuR5EWmrdSC4bNQYV1YfHBXI9c0VFiEgp0GX2QTb52kg/GH6Em5FSqTYCN/V\nabFBljhaHeID/SiW68NwcrPFAAvv2Cp4dIGX9YbsbnltqOzfNdKKhQKBgBfRckm3\n0zAaUwgTpOSntlDGTfz1sxhqz3kq8P25uzmIKmrQ7tjfqJFa/ETMQ/QpkrJk4tnc\nP7mswDylzahf68OLbSEAwJigD5CPTreXtVfAMmVkLvUVm+voePzPV5crmOqLqoNv\nGFAmzJfQyX0ayYWXAleq3AgV9vE9EX5gRq6ZAoGAOBgqpXHbq0Licgm3kZBNSPSt\nZ5ub8LBQ/v2e85yC4q1DyJyW2XhNRUp3tE4xOKSHdXAkSDKQwF9pmsGk4dHlu/L+\nE6/nqiePzh5btgHI3MPgTD/9b0B6LAeI1p3792dSQi3+7iaPx8IpZ9fD4RJ+aRlg\nXH+jvVYkdzw6S7pOzRc=\n-----END PRIVATE KEY-----\n",
                client_email: "my-bigquery-sa@bigqueryshakespeare.iam.gserviceaccount.com",
                client_id: "100713964465542400808",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/my-bigquery-sa%40bigqueryshakespeare.iam.gserviceaccount.com"
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



