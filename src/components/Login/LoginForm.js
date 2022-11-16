import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.scss';
import stylesBtn from '../Forms/Button.module.scss';
import Head from '../Helper/Head';

export default function LoginForm() {

    const username = useForm();
    const password = useForm();
    const { userLogin, error, loading } = useContext(UserContext);


    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {

            userLogin(username.value, password.value)
        }
    }


    return (
        <section className='animeLeft'>
            <Head title='Login' />
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label='Usuário' type='text' name='username' {...username} />
                <Input label='Senha' type='password' name='password' {...password} />
                {
                    loading ?
                        <Button disabled>Carregando...</Button>
                        :
                        <Button>Entrar</Button>
                }
                {
                    error &&
                    <Error error={error} />
                }
            </form>
            <Link className={styles.perdeu} to={'/login/perdeu'}>Perdeu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to={'/login/criar'}>Cadastro</Link>
            </div>
        </section>
    )
}
