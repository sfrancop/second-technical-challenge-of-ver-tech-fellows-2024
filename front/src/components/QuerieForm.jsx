import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { postQuery } from '../api/queryApi';
import { QueriesContext } from '../context/QueriesContext';
import { UserContext } from '../context/UserContext';

function QuerieForm() {

  const { user } = useContext(UserContext);
  const { loadQueries } = useContext(QueriesContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(
    async data => {
      let sql = "SELECT country_code, value from `bigquery-public-data.world_bank_intl_education.international_education` WHERE indicator_code = 'BAR.NOED." + data.age + "UP.ZS' AND year = " + parseInt(data.year);
      data['username'] = user;
      data['query'] = sql;
      data['comment'] = user+":"+data['comment'] + " - ";
      try{
        await postQuery(data);
        loadQueries();
      } catch (error) {
          alert("Our databas doesn not have response for your query, please try again with other parameters"); 
      }
    }
  );

  return (
    <div className='max-h-[600px] overflow-scroll font-Comfortaa'>
      <p className='text-[30px] font-bold text-white bg-gradient-to-br from-primary to-secondary py-2 px-6 rounded-2xl mb-10'>Create Your Query</p>
      <form onSubmit={onSubmit} className=' flex flex-col items-center content-center gap-10'>
          <input required {...register("name")} className='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="name" placeholder='Query name' />
          <textarea required {...register("comment")} className='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' name="comment" placeholder='Comment'/>
          <input required {...register("age")} className='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="age" placeholder='People older than...' />
          <input required {...register("year")} className='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="year" placeholder='Year' />
          <button className='bg-white text-secondary px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary' >Run Query</button>
      </form>
      <br/>
      <p className='text-white text-center text-xs'>The graph update can takes some minutes when you run a query</p>
    </div>
  )
}

export default QuerieForm