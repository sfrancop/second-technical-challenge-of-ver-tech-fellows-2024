// App.js
import React from 'react';

const App = () => {
  const query = "SELECT * FROM `bigquery-public-data.samples.gsod` LIMIT 1000";
fetch('http://localhost:8000', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
})
.then(response => response.json())
.then(data => console.log(data));
  return (
    <div>
      <h1>
        My BigQuery App
      </h1>
    </div>
  );
};

export default App;
