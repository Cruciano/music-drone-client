import React from 'react';
import image from './404.svg';
import styles from './Error404.module.css';

const Error404 = () => {
    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <img src={image}/>
                <div>
                    Error 404: <br/>
                    Page not found!
                </div>
            </div>
        </div>

    );
};

export default Error404;