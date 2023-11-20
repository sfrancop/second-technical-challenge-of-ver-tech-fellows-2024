// ResultComponent.js
import React, { useState, useEffect } from 'react';
const { BigQuery } = require('@google-cloud/bigquery');

const ResultComponent = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const bigquery = new BigQuery();

      const query = `SELECT name
        FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
        WHERE state = 'TX'
        LIMIT 100`;

      const options = {
        query: query,
        location: 'US',
      };

      const [job] = await bigquery.createQueryJob(options);
      console.log(`Job ${job.id} started.`);

      const [rows] = await job.getQueryResults();
      setResults(rows);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  return (
    <div>
      <h2>BigQuery Results</h2>
      <ul>
        {results.map((row, index) => (
          <li key={index}>{row.average}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultComponent;
