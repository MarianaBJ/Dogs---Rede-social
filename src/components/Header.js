import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';


export default function Header() {

    const { data, userLogout } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to={'/'} className={styles.logo} aria-label='Dogs - Home'>
                    <Dogs />
                </Link>
                {data ?
                    <Link className={styles.login} to={'/conta'}>{data.nome}
                    </Link>
                    :
                    <Link className={styles.login} to={'/login'}>Login / Criar</Link>
                }
            </nav>
        </header>
    )
}
