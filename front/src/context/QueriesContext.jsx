import React, { createContext, useState, useEffect  } from 'react';
import { getQueries, getResult } from '../api/queryApi';


export const QueriesContext = createContext();

function QueriesProvider({children}) {
    

    const [queries, setQueries] = useState([]);
    const [result, setResult] = useState([]);

    async function loadQueries() {
        const queries = await getQueries();
        console.log(queries);
        setQueries(queries.data);
        const result = await getResult();
        console.log(result);
        setResult(result.data);
      }
    useEffect(() => {
        loadQueries();
    }, []);

    return (
        <QueriesContext.Provider value={{queries, loadQueries, result, setResult}}>
            { children }
        </QueriesContext.Provider>
    )
}

export default QueriesProvider