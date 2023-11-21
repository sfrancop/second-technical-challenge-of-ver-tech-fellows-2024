import React from 'react'
import QuerieForm from './components/QuerieForm'
import QuriesHistory from './components/QuriesHistory'
import QuerieResult from './components/QuerieResult'
import QueriesProvider from './context/QueriesContext'

function App() {
  return (
    <QueriesProvider>
      <div className='bg-white h-fit p-20'>
        <header className=' bg-gradient-to-l from-black text-white to-secondary mb-10 py-2 text-center rounded-2xl font-Comfortaa'>
          <p className='text-[30px] font-bold  '>International Education Analyzer</p>
          <p>This application works to specifically analyze the uneducated population</p>
        </header>
        <div className="flex gap-5">
          <div className='w-3/5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary max-h-xs overflow-scroll'><QuerieForm/></div>   
          <div className='w-2/5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary max-h-xs overflow-scroll'><QuriesHistory /></div>
        </div> 
        <div className='mt-5 bg-secondary backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-secondary h-[600px] overflow-scroll'><QuerieResult /></div>
      </div>
    </QueriesProvider>
  )
}

export default App