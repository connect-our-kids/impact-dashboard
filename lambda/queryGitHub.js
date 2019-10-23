///extra data to use to distinguish between dashboards
"use strict";
    
    // Import the Google Cloud client library
    const { BigQuery } = require("@google-cloud/bigquery");
    const bigQueryCreds = require('../secrets')
    exports.queryGitHub =  async function() {
      // Queries a public GitHub dataset.
    
      const projectId = "bigquerygithub-256021";
      // Create a client
      const bigqueryClient = new BigQuery({
          projectId: projectId,
          credentials: bigQueryCreds
      });
    
      // The SQL query to run
      const sqlQuery = `SELECT subject AS subject, COUNT(*) AS num_duplicates
            FROM \`bigquery-public-data.github_repos.commits\`
            GROUP BY subject 
            ORDER BY num_duplicates 
            DESC LIMIT 10`;
    
      const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: "US"
      };
    
      // Run the query
      const [rows] = await bigqueryClient.query(options);
    
      // console.log('Rows:');
      // rows.forEach(row => console.log(`${row.subject}: ${row.num_duplicates}`));
      return rows;
    }