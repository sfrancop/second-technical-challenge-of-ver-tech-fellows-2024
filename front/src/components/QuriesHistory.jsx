import React, { useEffect, useState } from 'react'
import QuerieInfo from './QuerieInfo'
import { getQueries } from '../api/queryApi'

function QuriesHistory() {

  const [queries, setQueries] = useState([]);

  useEffect(() => {

    async function loadQueries() {
      const queries = await getQueries();
      console.log(queries);
      setQueries(queries.data);
    }
    loadQueries();

  }, []);

  return (
    <div className='gap-6 max-h-[600px] overflow-scroll flex flex-col'>
      <p className='text-[30px] font-bold text-white bg-gradient-to-br from-primary to-secondary py-2 px-6 rounded-2xl'>Queries History</p>
      {queries.map(
        query => (
            <div className='bg-white p-6 rounded-2xl font-Comfortaa'>
              <QuerieInfo
                key={query.id}
                name={query.name}
                username={query.username}
                comment={query.comment}
                query={query.query}
              />
            </div>
          )
        )
      }
    </div>
  )
}

export default QuriesHistory