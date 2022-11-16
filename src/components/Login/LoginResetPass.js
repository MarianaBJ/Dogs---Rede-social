import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';


export default function LoginResetPass() {

    const [login, setLogin] = useState('');
    const [key, setKey] = useState('');
    const password = useForm();
    const navigate = useNavigate();
    const { error, loading, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password.validate) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value
            })

            const { response } = await request(url, options);

            if (response.ok) navigate('/login');
        }
    }


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');

        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);


    return (
        <div>
            <Head title='Resete a senha' />
            <h1>Resete sua senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label='Nova Senha' type='password' name='password' {...password} />
                {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
            </form>
            <Error error={error} />
        </div>
    )
}
