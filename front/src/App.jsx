import React from 'react'
import QuerieForm from './components/QuerieForm'
import QuriesHistory from './components/QuriesHistory'
import QuerieResult from './components/QuerieResult'

function App() {
  return (
    <div className='bg-primary h-fit p-20'>
      <p className='text-[30px] font-bold mb-10 text-black bg-white py-2 text-center rounded-2xl font-Comfortaa'>International Education Analyzer</p>
      <div className="flex gap-5">
        <div className='w-3/5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary max-h-xs overflow-scroll'><QuerieForm/></div>   
        <div className='w-2/5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary max-h-xs overflow-scroll'><QuriesHistory /></div>
      </div> 
      <div className='mt-5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary h-[600px] overflow-scroll'><QuerieResult /></div>
    </div>
  )
}

export default App