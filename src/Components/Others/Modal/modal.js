import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';

function Modal ({ modal, children }) {
    if (!modal) return;

    return ReactDom.createPortal(<div className={styles.modalContainer}>
        {children}
    </div>, document.getElementById('portal'))
}

export default Modal;
