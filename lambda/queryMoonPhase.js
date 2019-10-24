///extra data to use to distinguish between dashboards
'use strict';

// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

const bigQueryCreds = require('../secrets')

exports.queryMoonPhases = async function () {
    // Queries a public Shakespeare dataset.
    const projectId = "bigquerygithub-256021";

    // Create a client
    const bigqueryClient = new BigQuery({
        projectId: projectId,
        credentials: bigQueryCreds
    });
    console.log(process.env, "this")

    // The SQL query to run
    const sqlQuery = `SELECT phase, phase_emoji, peak_datetime
            FROM \`bigquery-public-data.moon_phases.moon_phases\`
            LIMIT 5`;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    // console.log('Rows:');
    // rows.forEach(row => console.log(row));
    return rows;
}