import React from 'react';
import styles from './about.module.css';

function About () {
    return (
        <div className={styles.aboutMeContainer} id="about">
            <h3 className={styles.aboutMeH3}>About me</h3>
            <p className={styles.aboutMeP}>Hi, I'm Md Aminur Rahman, a frontend developer specializing in user-friendly websites using the MERN stack. With 4+ years of experience in HTML, CSS, JavaScript, and the MERN (MongoDB, Express.js, React, Node.js) stack, transforming design mockups into pixel-perfect sites.</p>
            <p className={styles.aboutMeP}>I prioritize the user experience, staying up to date with the latest trends and best practices. Collaboration is key, and I enjoy working closely with designers and developers to deliver seamless interfaces.</p>
            <p className={styles.aboutMeP}>Clean code architecture and problem-solving are my strengths. I strive for scalability and maintainability in every project. Continuous learning is important to me, and I stay engaged with online communities and conferences.</p>
            <p className={styles.aboutMeP}>Let's discuss how I can contribute to your projects and create exceptional user experiences together!</p>
        </div>
    )
}

export default About;
