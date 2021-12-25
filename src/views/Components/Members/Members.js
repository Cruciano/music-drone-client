import React from 'react';
import Member from "./Member";
import styles from './Members.module.css';

const Members = () => {
    return (
        <div className={styles.members}>
            <Member />
            <Member />
            <Member />
        </div>
    );
};

export default Members;