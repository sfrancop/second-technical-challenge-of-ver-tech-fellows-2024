import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { postQuery } from '../api/queryApi';
import QuriesHistory from './QuriesHistory';
import { QueriesContext } from '../context/QueriesContext';

function QuerieForm() {

  const { queries, loadQueries } = useContext(QueriesContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(
    async data => {
      await postQuery(data);
      loadQueries();
    }
  );

  return (
    <div>
      <p className='text-[30px] font-bold text-white bg-gradient-to-br from-primary to-secondary py-2 px-6 rounded-2xl mb-10'>Create Your Query</p>
      <form onSubmit={onSubmit} className=' flex flex-col items-center content-center gap-10'>
          <input {...register("name")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="name" placeholder='Query name' />
          <input {...register("username")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="username" placeholder='Your username'/>
          <textarea {...register("comment")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' name="comment" placeholder='Comment'/>
          <textarea {...register("query")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' name="query" placeholder='Query'/>
          <button className='bg-primary text-white px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-[#ffffff]' >Run Query</button>
      </form>
    </div>
  )
}

export default QuerieForm