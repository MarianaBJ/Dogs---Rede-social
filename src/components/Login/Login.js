import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLostPass from './LoginLostPass';
import LoginResetPass from './LoginResetPass';


export default function Login() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='criar' element={<LoginCreate />} />
                <Route path='/perdeu' element={<LoginLostPass />} />
                <Route path='/resetar' element={<LoginResetPass />} />
            </Routes>
        </div>
    )
}
