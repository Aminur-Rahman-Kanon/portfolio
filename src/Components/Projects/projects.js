import React from 'react';
import styles from './projects.module.css';
import nihon from '../../Assets/projects/nihonChukoSha.png';
import phone from '../../Assets/projects/phoneClinic.png';
import cycle from '../../Assets/projects/cycleFix.png';
import karkhana from '../../Assets/projects/karkhana.png';

function Projects () {
    return (
        <div className={styles.projectContainer} id="projects">
            <h3 className={styles.projectH3}>Projects</h3>
            <p className={styles.projectP}>I have built various different projects to fit different aspects of the client's business.
             If you want to see more examples of my work than the ones showcased in this site, please contact me!
            </p>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsItem}>
                    <a href="https://nihonchukosha.onrender.com" target='_blank' className={styles.projectsImgContainer}>
                        <img src={nihon} alt="nihonchukosha.onrender.com" className={styles.projectsImg}/>
                    </a>
                    <div className={styles.projectsDetailsContainer}>
                        <h2 className={styles.projectH2}>Nihon Chuko Sha Auto</h2>
                        <p className={styles.projectP}>Semi-commerce website for cars auction and parts</p>
                        <p className={styles.projectP}><strong>Built with:</strong> MERN stack web application using Reactjs, Redux, Nodejs (Express), MongoDB, Firebase Storage, Firebase Database, and Email.js and cloud hosting.</p>
                        <div className={styles.projectsLinkGroup}>
                            <a href='https://github.com/Aminur-Rahman-Kanon/ncs-client' className={styles.projectsLink}>Client Source Code</a>
                            <a href='https://github.com/Aminur-Rahman-Kanon/ncs-server' className={styles.projectsLink}>Server Source Code</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItem}>
                    <a href="https://phoneclinic.onrender.com" target='_blank' className={styles.projectsImgContainer}>
                        <img src={phone} alt="phoneclinic.onrender.com" className={styles.projectsImg}/>
                    </a>
                    <div className={styles.projectsDetailsContainer}>
                        <h2 className={styles.projectH2}>Phone Clinic</h2>
                        <p className={styles.projectP}>An online phone, tablet and laptop repair booking service</p>
                        <p className={styles.projectP}><strong>Built with:</strong> MERN stack web application using Reactjs, Nodejs (Express), MongoDB and Emailjs, Cloud hosting and some third party React Components.</p>
                        <div className={styles.projectsLinkGroup}>
                            <a href="https://github.com/Aminur-Rahman-Kanon/phoneClinicClient" className={styles.projectsLink}>Client Source code</a>
                            <a href="https://github.com/Aminur-Rahman-Kanon/phoneClinicClient" className={styles.projectsLink}>Server Source code</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItem}>
                    <a href="https://cyclefix.onrender.com" target='_blank' className={styles.projectsImgContainer}>
                        <img src={cycle} alt="cyclefix.onrender.com" className={styles.projectsImg}/>
                    </a>
                    <div className={styles.projectsDetailsContainer}>
                        <h2 className={styles.projectH2}>Cycle Fix</h2>
                        <p className={styles.projectP}>An online bike and e-scooter repair booking service</p>
                        <p className={styles.projectP}><strong>Built with:</strong> MERN stack web application using Reactjs, React calender, Nodejs(Express), mongoDB, Stripe(Payment service), nodeMailer, Google login, View-Engine(EJS), JWT, Cloud hosting and some other third party React Components.</p>
                        <div className={styles.projectsLinkGroup}>
                            <a href="https://github.com/Aminur-Rahman-Kanon/cycleFixClient" className={styles.projectsLink}>Client Source Code</a>
                            <a href="https://github.com/Aminur-Rahman-Kanon/cycleFixServer" className={styles.projectsLink}>Server Source Code</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projectsItem}>
                    <a href="https://karkhana.onrender.com" target='_blank' className={styles.projectsImgContainer}>
                        <img src={karkhana} alt="karkhana.onrender.com" className={styles.projectsImg}/>
                    </a>
                    <div className={styles.projectsDetailsContainer}>
                        <h2 className={styles.projectH2}>Karkhana</h2>
                        <p className={styles.projectP}>An online store for selling womens casual jewelleries</p>
                        <p className={styles.projectP}><strong>Built with:</strong> MERN stack web application built using Reactjs, Nodejs(Express), mongoDB, Firebase storage, Stripe(Payment system), CSS, React-Query, Context-Api, View-Engine(EJS), JWT, Cloud hosting and some other third party React Components.</p>
                        <div className={styles.projectsLinkGroup}>
                            <a href='https://github.com/Aminur-Rahman-Kanon/karkhana-client' className={styles.projectsLink}>Client Source Code</a>
                            <a href='https://github.com/Aminur-Rahman-Kanon/karkhana-server' className={styles.projectsLink}>Server Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
