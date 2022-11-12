import React, { useState } from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.scss';


export default function PhotoCommentsForm({ id, setComments }) {

    const [comment, setComment] = useState('');
    const { request, error } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);
        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <textarea value={comment}
                id='comment'
                name='comment'
                placeholder='Comente...'
                className={styles.textarea}
                onChange={({ target }) => setComment(target.value)} />
            <button className={styles.button}><Enviar /></button>
            {error && <Error error={error} />}
        </form>
    )
}
