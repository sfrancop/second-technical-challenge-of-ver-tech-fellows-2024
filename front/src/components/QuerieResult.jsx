import React, { useContext } from 'react'
import { QueriesContext } from '../context/QueriesContext';

function QuerieResult() {
  const { queries } = useContext(QueriesContext);
  return (
    <div>
      <p className='text-[30px] font-bold text-white bg-gradient-to-br from-primary to-secondary py-2 px-6 rounded-2xl'>
        Query Results
      </p>
      {JSON.stringify(queries[queries.length - 1])}
    </div>
  )
}

export default QuerieResult