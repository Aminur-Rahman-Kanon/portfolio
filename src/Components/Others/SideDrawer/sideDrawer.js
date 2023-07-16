import React from 'react';
import styles from './sideDrawer.module.css';
import SidePanel from '../../SidePanel/sidePanel';

function SideDrawer ({sidePanel}) {
    return (
        <div className={sidePanel ? styles.sideDrawerContainer : `${styles.sideDrawerContainer} ${styles.off}`}>
            <SidePanel />
        </div>
    )
}

export default SideDrawer;