import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

export default function Home() {
    return (
        <section className='container mainContainer'>
            <Head title='Fotos' description='Feed de fotos.' />
            <Feed />
        </section>
    )
}
