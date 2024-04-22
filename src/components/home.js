'use client';

import { useState } from 'react'
import Login from '../components/login'
import Navbar from '../components/navbar'
import Dashboard from './dashboard'

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('pirateId'))

    if (!isLoggedIn) {
        return <Login onLogin={() => setIsLoggedIn(true)} />
    }

    return <>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Dashboard />
    </>
}

export default Home
