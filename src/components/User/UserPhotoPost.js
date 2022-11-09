import React, { useEffect, useState } from 'react';
import styles from './UserPhotoPost.module.scss';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function UserPhotoPost() {

    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = useState({});

    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    };


    function handleImgChange({ target }) {

        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })
    };


    useEffect(() => {
        if (data)
            navigate('/conta')
    }, [data, navigate])

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input label='Nome' type='text' name='nome' {...nome} />
                <Input label='Peso' type='text' name='peso' {...peso} />
                <Input label='Idade' type='text' name='idade' {...idade} />
                <input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
                {
                    loading ?
                        <Button disabled>Enviando</Button>
                        :
                        <Button>Enviar</Button>
                }
                <Error error={error} />
            </form>
            <div>
                {img.preview && (
                    <img className={styles.preview} src={img.preview} alt='teste' />
                )}
            </div>
        </section>)
}
