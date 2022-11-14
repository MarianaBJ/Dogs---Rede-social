import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext'

const ProtectedRouter = ({ children }) => {

    const { login } = useContext(UserContext);
    const userLogin = window.localStorage.getItem('user');

    return ((login && userLogin) || (!login && userLogin)) ? children : <Navigate to='/login' />
}
export default ProtectedRouter;