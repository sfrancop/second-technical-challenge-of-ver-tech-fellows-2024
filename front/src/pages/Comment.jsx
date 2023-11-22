import React, { useContext } from 'react'
import { getQuery, putQuery } from '../api/queryApi'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { QueriesContext } from '../context/QueriesContext'

function Comment() {
    const { user } = useContext(UserContext)
    const { loadQueries } = useContext(QueriesContext)
    const params = useParams()
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(
      async data => {
        let actualQuery = await getQuery(params.id)
        actualQuery = actualQuery.data
        actualQuery['comment'] = " " + actualQuery.comment + user+":"+data.comment+" - "
        putQuery(params.id, actualQuery)
        alert("Your comment is being published, press Ok and pleas wait to be automatically redirected.")
        await loadQueries()
        navigate('/analyzer')
      }
    );
  return (
    <div className='bg-white h-screen p-20'>
        <form onSubmit={onSubmit} className='flex flex-col content-center items-center bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md'>
            <input {...register("comment")} className='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' name="comment" type="text" placeholder='Comment' /><br/><br/>
            <button className='bg-primary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-secondary'>Publish</button>
        </form>
    </div>
  )
}

export default Comment