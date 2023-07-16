import React from "react";
import styles from './spinner.module.css';
import { SpinnerCircular } from 'spinners-react';

const Spinner = ({ spinner }) => {
    if (!spinner) return;

    return (
        <div className={styles.spinnerContainer}>
            <SpinnerCircular size={50} thickness={100} speed={100} color="rgb(224, 118, 24)" secondaryColor="rgba(0, 0, 0, 0.44)" />
            <p className={styles.spinnerP}>Please Wait</p>
        </div>
    )
}

export default Spinner;
