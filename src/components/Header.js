import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to={'/'} className={styles.logo} aria-label='Dogs - Home'>
                    <Dogs />
                </Link>
                <Link className={styles.login} to={'/login'}>Login / Criar</Link>
            </nav>
        </header>
    )
}
