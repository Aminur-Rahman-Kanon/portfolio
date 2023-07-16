import React from 'react';
import styles from './about.module.css';

function About () {
    return (
        <div className={styles.aboutMeContainer} id="about">
            <h3 className={styles.aboutMeH3}>About me</h3>
            <p className={styles.aboutMeP}>My name is Md Aminur Rahman and I'm a Web developer. I am Professionally connected with the web development industry.</p>
            <p className={styles.aboutMeP}>I am a Problem solver, well-organised person, loyal employee with high attention to detail. Fan of Javascript, outdoor activities,
                video games, and coding of course.</p>
            <p className={styles.aboutMeP}>Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
        </div>
    )
}

export default About;
