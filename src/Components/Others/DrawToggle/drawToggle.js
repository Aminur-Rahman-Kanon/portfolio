import React from 'react';
import styles from './drawToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function DrawToggle ({toggleSidePanel}) {
    return (
        <div className={styles.drawToggleContainer} onClick={ toggleSidePanel }>
            <FontAwesomeIcon icon={faEllipsis} className={styles.drawToogleBar}/>
        </div>
    )
}

export default DrawToggle;
