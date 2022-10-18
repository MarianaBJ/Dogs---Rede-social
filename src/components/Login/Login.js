import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLostPass from './LoginLostPass';
import LoginResetPass from './LoginResetPass';
import { UserContext } from '../../UserContext';
import styles from './Login.module.scss';

export default function Login() {
    const { login } = useContext(UserContext);

    if (login === true) return <Navigate to='/conta' />
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='criar' element={<LoginCreate />} />
                    <Route path='/perdeu' element={<LoginLostPass />} />
                    <Route path='/resetar' element={<LoginResetPass />} />
                </Routes>
            </div>
        </section>
    )
}
