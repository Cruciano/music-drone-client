import React from 'react';
import styles from './Members.module.css';

const MemberItem = ({username}) => {
    return (
        <div className={styles.member}>
            {username}
        </div>
    );
};

export default MemberItem;