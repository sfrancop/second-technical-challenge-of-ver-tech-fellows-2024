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
      let sql = "SELECT country_code, value from `bigquery-public-data.world_bank_intl_education.international_education` WHERE indicator_code = 'BAR.NOED." + data.age + "UP.ZS' AND year = " + parseInt(data.year);
      data['query'] = sql;
      console.log(data);
      await postQuery(data);
      loadQueries();
    }
  );

  return (
    <div className='max-h-[600px] overflow-scroll'>
      <p className='text-[30px] font-bold text-white bg-gradient-to-br from-primary to-secondary py-2 px-6 rounded-2xl mb-10'>Create Your Query</p>
      <form onSubmit={onSubmit} className=' flex flex-col items-center content-center gap-10'>
          <input {...register("name")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="name" placeholder='Query name' />
          <input {...register("username")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="username" placeholder='Your username'/>
          <textarea {...register("comment")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' name="comment" placeholder='Comment'/>
          <input {...register("age")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="age" placeholder='People older than...' />
          <input {...register("year")} class='transition-[border] duration-[250ms] bg-transparent border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-white w-4/5 px-8 text-center font-Comfortaa h-12 text-white' type="text" name="year" placeholder='Year' />
          <div className="text-white flex flex-col content-center items-center  w-full  font-Comfortaa">
            <p className='font-bold '>Select the gender of interest</p><br/>
            <input {...register("gender")} type="radio" id="male" name="gender" value="Male"/>
            <label for="male">Male</label><br/>
            <input {...register("gender")} type="radio" id="female" name="gender" value="Female"/>
            <label for="female" >Female</label>
          </div>
          <button className='bg-white text-secondary px-4 py-1 h-screend rounded font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-primary' >Run Query</button>
      </form>
    </div>
  )
}

export default QuerieForm