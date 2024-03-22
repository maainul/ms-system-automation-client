import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TableList from './pages/TableList';


const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tables/list" element={<TableList />} />
        </Routes>
    )
}

export default MyRoutes
