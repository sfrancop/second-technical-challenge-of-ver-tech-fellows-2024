import React from 'react'

function QuerieInfo(props) {
  return (
    <div>

      <p className='font-bold text-xl'>Name:</p>
      <p>{props.name}</p>
      <br/>

      <p className='font-bold text-xl'>Creator:</p>
      <p>{props.username}</p>
      <br/>

      <p className='font-bold text-xl'>Comments:</p>
      <p>gio: {props.comment}</p>
      <br/>

      <p className='font-bold text-xl'>Query:</p>
      <p className='overflow-scroll'>{props.query}</p>
      <br/>

      <div className="flex gap-4">
        <button className='bg-secondary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-[#ffffff]'>Use</button>
        <button className='bg-secondary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-[#ffffff]'>Comment</button>
      </div>

    </div>
  )
}

export default QuerieInfo