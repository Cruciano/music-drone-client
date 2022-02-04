import React from 'react';
import cn from "classnames";
import styles from './modal.module.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={cn(active && styles.activeModal, styles.modal)}
             onClick={() => setActive(false)}>
            <div className={cn(active && styles.activeContent, styles.modal_content)}
             onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;