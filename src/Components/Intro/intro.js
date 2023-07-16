import React from 'react';
import styles from './intro.module.css';
import logo from '../../Assets/banner.png'

function Intro () {
    return (
        <div className={styles.introContainer} id="intro">
            <div className={styles.introItems}>
                {/*Background image*/}
            </div>
            <div className={styles.introItemHeaderContainer}>
                <div className={styles.introItemHeaderItems}>
                    <h1 className={styles.introH1}>Discover my Amazing Skills!</h1>
                    <p className={styles.introP}>code: Hello world!</p>
                    <button className={styles.exploreBtn}>Explore Now</button>
                </div>
                <div className={styles.introItemHeaderLogoContainer}>
                    <img src={logo} alt="Javascript" className={styles.introItemHeaderLogo}/>
                </div>
            </div>
        </div>
    )
}

export default Intro;
