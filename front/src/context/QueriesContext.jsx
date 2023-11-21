import React, { createContext, useState, useEffect  } from 'react';
import { getQueries } from '../api/queryApi';


export const QueriesContext = createContext();

function QueriesProvider({children}) {
    

    const [queries, setQueries] = useState([]);

    async function loadQueries() {
        const queries = await getQueries();
        console.log(queries);
        setQueries(queries.data);
      }
    useEffect(() => {
        loadQueries();
    }, []);

    return (
        <QueriesContext.Provider value={{queries, loadQueries}}>
            { children }
        </QueriesContext.Provider>
    )
}

export default QueriesProvider