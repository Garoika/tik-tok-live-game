import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage'
import { Clicker } from './components/Clicker'
import {Words} from './components/Words'


export const useRoutes = () => {
    return (
        <Routes>
            <Route path='/words' element={<Words /> } />
            <Route path='/clicker' element={<Clicker /> } />
            <Route path='/' element={<MainPage /> } />
        </Routes>
    )
}