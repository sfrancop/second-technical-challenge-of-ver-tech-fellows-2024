import React from 'react'
import { useNavigate } from 'react-router-dom'

function QuerieInfo(props) {
  const navigate = useNavigate();
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
      <br/>

      <p className='font-bold text-xl'>Query:</p>
      <p className='overflow-scroll'>{props.query}</p>
      <br/>

      <div className="flex gap-4">
        <button className='bg-secondary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary'>Use</button>
        <button onClick={() => {navigate("/query/"+props.id)}} className='bg-secondary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary'>Comment</button>
      </div>

    </div>
  )
}

export default QuerieInfo