import React from 'react'
import Analyzer from './pages/Analyzer'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Comment from './pages/Comment';
import QueriesProvider from './context/QueriesContext';
import UserProvider from './context/UserContext';

function App() {
  console.log("Aaah curiocillo")
  return (
    <div>
      <QueriesProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path='/analyzer' element={<Analyzer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/query/:id' element={<Comment />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </QueriesProvider>
    </div>
  )
}

export default App