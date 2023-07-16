import React from 'react';
import styles from './skills.module.css';
import js from '../../Assets/icons/js.png';
import css from '../../Assets/icons/css.png';
import bootstrap from '../../Assets/icons/bootstrap.png';
import react from '../../Assets/icons/react.png';
import node from '../../Assets/icons/node.png';
import vs from '../../Assets/icons/vs.png';
import git from '../../Assets/icons/git.png';
import html from '../../Assets/icons/html.png';
import express from '../../Assets/icons/express.png';
import mongo from '../../Assets/icons/mongo.png';
import python from '../../Assets/icons/python.png';
import sql from '../../Assets/icons/sql.png';
import cisco from '../../Assets/icons/cisco.png';

function Skills () {
    return (
        <div className={styles.skillsContainer} id="skills">
            <h3 className={styles.skillsH3}>Skills</h3>
            <div className={styles.skillsDetailsContainer}>
                <p className={styles.skillsP}>The main area of expertise is front end development (client side of the web).</p>
                <p className={styles.skillsP}>HTML, CSS, JS, building small and medium web applications with Vue or React,
                    custom plugins, features, animations, and coding interactive layouts.
                    I have also full-stack developer experience with one of the most popular open source Javascript software stack <strong>MERN</strong>
                </p>
                <span>Visit my <a href="#" className={styles.skillsLink}>Linkedin</a> for more details.</span>

            </div>
            <div className={styles.skillsStackIconsContainer}>
                <div className={styles.iconContainer}>
                    <img src={js} className={styles.icon}/>
                    <p className={styles.iconP}>Javascript</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={react} className={styles.icon}/>
                    <p className={styles.iconP}>React</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={node} className={styles.icon}/>
                    <p className={styles.iconP}>Node</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={bootstrap} className={styles.icon}/>
                    <p className={styles.iconP}>BootStrap</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={css} className={styles.icon}/>
                    <p className={styles.iconP}>CSS</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={express} className={styles.icon}/>
                    <p className={styles.iconP}>express</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={git} className={styles.icon}/>
                    <p className={styles.iconP}>Git</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={html} className={styles.icon}/>
                    <p className={styles.iconP}>Html</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={mongo} className={styles.icon}/>
                    <p className={styles.iconP}>MongoDB</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={python} className={styles.icon}/>
                    <p className={styles.iconP}>Python</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={sql} className={styles.icon}/>
                    <p className={styles.iconP}>MySQL</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={vs} className={styles.icon}/>
                    <p className={styles.iconP}>Visual Studio Code</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={cisco} className={styles.icon}/>
                    <p className={styles.iconP}>CCENT</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;
