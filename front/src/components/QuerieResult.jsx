import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QueriesContext } from '../context/QueriesContext';

function QuerieResult() {
  const { result } = useContext(QueriesContext);
  if (result.length > 0) {
    return (
      <ResponsiveContainer className="bg-slate-300 overflow-scroll" width="100%" height="100%">
      <p className='text-[20px] font-bold text-white bg-primary text-center'>Last query result</p>
      <BarChart
        width={500}
        height={400}
        data={result}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="country_code" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
      </ResponsiveContainer>
    )
  }
  else{
    return(
      <div className='w-full h-full bg-slate-600 font-Comfortaa text-2xl font-bold text-white flex items-center content-center'>
        <p>Data loading, please wait...</p>
      </div>
    )
  }
}

export default QuerieResult
