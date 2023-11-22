import React from 'react'
import QuerieForm from '../components/QuerieForm'
import QuriesHistory from '../components/QuriesHistory'
import QuerieResult from '../components/QuerieResult'
import { useNavigate } from 'react-router-dom'

function Analyzer() {

  const navigate = useNavigate();

  return (
    
      <div className='p-20 bg-white'>
        <header className='gap-10 flex bg-gradient-to-l from-black text-white to-secondary mb-10 py-2 rounded-2xl font-Comfortaa w-fit px-8'>
          <div onClick={() => {navigate("/login")}} className="bg-gradient-to-l font-bold from-primary to-secondary rounded-2xl px-5 flex content-start items-center transition hover:text-primary cursor-pointer">Log out</div>
          <div>
            <p className='text-[30px] font-bold '>International Education Analyzer</p>
            <p>This application works to specifically analyze the pecentage of uneducated population</p>
          </div>
        </header>
        <div className="flex gap-5">
          <div className='w-3/5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary max-h-xs overflow-scroll'><QuerieForm/></div>   
          <div className='w-2/5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary max-h-xs overflow-scroll'><QuriesHistory /></div>
        </div> 
        <div className='mt-5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary h-[600px] overflow-scroll'><QuerieResult /></div>
      </div>
  )
}

export default Analyzer