import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Image from '../Helper/Image';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.scss';
import PhotoDelete from './PhotoDelete';

export default function PhotoContent({ data, single }) {
    const { photo, comments } = data;
    const user = useContext(UserContext);

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} />
                            :
                            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}

                        <span className={styles.visualizacoes}>{photo.acessos}</span>
                    </p>
                    <h1 className='title'>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} anos</li>
                    </ul>
                </div>
            </div>
            <PhotoComments single={single} id={photo.id} comments={comments} />
        </div>
    )
}
