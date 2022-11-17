import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

export default function User() {

    let data = localStorage.getItem('user');
    data = JSON.parse(data)

    if (!data) return null;
    if (data)
        return (
            <section className='container'>
                <Head title='Minha conta' />
                <UserHeader />
                <Routes>
                    <Route path='/' element={<Feed user={data.id} />} />
                    <Route path='postar' element={<UserPhotoPost />} />
                    <Route path='estatisticas' element={<UserStats />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </section>
        )
}
