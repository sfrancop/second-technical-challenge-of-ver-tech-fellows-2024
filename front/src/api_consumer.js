// Import the Google Cloud client library using default credentials
const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery();
export async function query() {
  // Queries the U.S. given names dataset for the state of Texas.

  const query = `SELECT 
    country_name,
    AVG(value) AS average
    FROM \`bigquery-public-data.world_bank_intl_education.international_education\`
    WHERE
      indicator_code = "SE.XPD.TOTL.GB.ZS"
      AND year > 2000
    GROUP BY
      country_name
    ORDER BY
      average DESC
    LIMIT 10`;

  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
  const options = {
    query: query,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query as a job
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();

  // Print the results
  console.log('Rows:');
  rows.forEach(row => console.log(row));
}

query();