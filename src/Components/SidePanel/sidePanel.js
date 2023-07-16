import React from 'react';
import styles from './sidePanel.module.css';
import person from '../../Assets/person1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SidePanel () {
    return (
        <div className={styles.sidePanelContainer}>
            <div className={styles.avatarContainer}>
                <div className={styles.avatarImgContainer}>
                    <img src={person} alt="aminur-rahman-kanon" className={styles.avatar}/>
                </div>
                <h5 className={styles.sidePanelH5}> Md Aminur Rahman</h5>
                <p className={styles.sidePanelP}>Front-end Developer</p>
                <p className={styles.sidePanelP}>React Developer</p>
            </div>
            <div className={styles.personDetailsContainer}>
                <ul className={styles.personDetailsLists}>
                    <li className={styles.personDetailsList}>
                        <h6 className={styles.sidePanelH6}>Residence</h6>
                        <p className={styles.sidePanelP}>United Kingdom</p>
                    </li>
                    <li className={styles.personDetailsList}>
                        <h6 className={styles.sidePanelH6}>City</h6>
                        <p className={styles.sidePanelP}>London</p>
                    </li>
                    <li className={styles.personDetailsList}>
                        <h6 className={styles.sidePanelH6}>Age</h6>
                        <p className={styles.sidePanelP}>31</p>
                    </li>
                </ul>

                <hr className={styles.hr}/>

                <div className={styles.personDetails}>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarLabel}>
                            <h6 className={styles.sidePanelH6}>Html</h6>
                            <p className={styles.sidePanelP}>90%</p>
                        </div>
                        <div className={styles.progressBar} id={styles.nientyPercent}></div>
                    </div>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarLabel}>
                            <h6 className={styles.sidePanelH6}>CSS</h6>
                            <p className={styles.sidePanelP}>80%</p>
                        </div>
                        <div className={styles.progressBar} id={styles.eightyPercent}></div>
                    </div>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarLabel}>
                            <h6 className={styles.sidePanelH6}>Javascript</h6>
                            <p className={styles.sidePanelP}>90%</p>
                        </div>
                        <div className={styles.progressBar} id={styles.nientyPercent}></div>
                    </div>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarLabel}>
                            <h6 className={styles.sidePanelH6}>React</h6>
                            <p className={styles.sidePanelP}>90%</p>
                        </div>
                        <div className={styles.progressBar} id={styles.nientyPercent}></div>
                    </div>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarLabel}>
                            <h6 className={styles.sidePanelH6}>Express</h6>
                            <p className={styles.sidePanelP}>70%</p>
                        </div>
                        <div className={styles.progressBar} id={styles.seventyPercent}></div>
                    </div>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarLabel}>
                            <h6 className={styles.sidePanelH6}>SQL</h6>
                            <p className={styles.sidePanelP}>70%</p>
                        </div>
                        <div className={styles.progressBar} id={styles.seventyPercent}></div>
                    </div>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarLabel}>
                            <h6 className={styles.sidePanelH6}>MongoDB</h6>
                            <p className={styles.sidePanelP}>80%</p>
                        </div>
                        <div className={styles.progressBar} id={styles.eightyPercent}></div>
                    </div>
                </div>

                <hr className={styles.hr}/>

                <div className={styles.downloadCvBar}>
                    <button className={styles.downloadCVbtn}>DOWNLOAD CV</button>
                </div>
            </div>
            <div className={styles.socialLinkContainer}>
                <ul className={styles.socialLinkLists}>
                    <li className={styles.socialLinkList}>
                        <FontAwesomeIcon icon={faGithub} className={styles.socialLinkIcon}/>
                    </li>
                    <li className={styles.socialLinkList}>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socialLinkIcon}/>
                    </li>
                    <li className={styles.socialLinkList}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.socialLinkIcon}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidePanel;
