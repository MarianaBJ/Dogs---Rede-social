import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './PhotoComments.module.scss';
import PhotoCommentsForm from './PhotoCommentsForm';
import { UserContext } from '../../UserContext';


export default function PhotoComments(props) {
    const { login } = useContext(UserContext);
    const [comments, setComments] = useState(() => props.comments);
    const commentsSection = useRef(null);

    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments])

    return (
        <>
            <ul ref={commentsSection} className={styles.comment}>
                {
                    comments.map(comment => <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>)
                }
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}
