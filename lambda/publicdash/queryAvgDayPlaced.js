///Mock data to use to distinguish between dashboards
"use strict";
    
    // Import the Google Cloud client library
    const { BigQuery } = require("@google-cloud/bigquery");
    const bigQueryCreds = require('../../secrets')
    exports.queryAvgDayPlaced =  async function() {
      // Queries a public GitHub dataset.
    
      const projectId = "coki-impact";
      // Create a client
      const bigqueryClient = new BigQuery({
          projectId: projectId,
          credentials: bigQueryCreds
      });
    
      // The SQL query to run
      const sqlQuery = `SELECT AVG(DATE_DIFF(close_date, open_date, DAY))
            FROM \`coki-impact.COKI_MOCK.cases\`
            `;
    
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