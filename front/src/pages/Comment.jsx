import React, { useContext } from 'react'
import { getQuery, putQuery } from '../api/queryApi'
import { useParams } from 'react-router-dom'
import { get, useForm } from 'react-hook-form'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Comment() {
    const { user } = useContext(UserContext)
    const params = useParams()
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(
      async data => {
        let actualQuery = getQuery(params.id)
        actualQuery.comment = actualQuery.comment + user+":"+data.comment+" - "
        console.log(actualQuery)
        putQuery(params.id, actualQuery)
        navigate("/analyzer")
      }
    );
  return (
    <div>
        <form onSubmit={onSubmit}>

        
            <input {...register("comment")} name="comment" type="text" placeholder='Comment' /><br/><br/>
            <button className='bg-secondary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary'>Publish</button>

        </form>

    </div>
  )
}

export default Comment