import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuery } from '../api/queryApi';
import { QueriesContext } from '../context/QueriesContext';
import { postQuery } from '../api/queryApi';

function QuerieInfo(props) {
  const { loadQueries } = useContext(QueriesContext);
  const navigate = useNavigate();

  async function useQuery(){
    let data = await getQuery(props.id);
    await postQuery(data.data);
    loadQueries();
  }

  return (
    <div>

      <p className='font-bold text-xl'>Name:</p>
      <p>{props.name}</p>
      <br/>

      <p className='font-bold text-xl'>Creator:</p>
      <p>{props.username}</p>
      <br/>

      <p className='font-bold text-xl'>Comments:</p>
      {props.comment}
      <br/><br/>

      <div className="flex gap-4">
        <button onClick={() => {useQuery()}} className='bg-secondary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary'>Use</button>
        <button onClick={() => {navigate("/query/"+props.id)}} className='bg-secondary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary'>Comment</button>
      </div>

    </div>
  )
}

export default QuerieInfo