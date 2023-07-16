import React, { useState } from 'react';
import Intro from './Components/Intro/intro';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import About from './Components/About/about'
import SidePanel from './Components/SidePanel/sidePanel';
import Skills from './Components/Skills/skills';
import DrawToggle from './Components/Others/DrawToggle/drawToggle';
import SideDrawer from './Components/Others/SideDrawer/sideDrawer';
import styles from './App.module.css';
import Backdrop from './Components/Others/Backdrop/backdrop';

function App() {

    const [sidePanel, setSidePanel] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [page, setPage] = useState('');

    const smoothScroll = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
      })
      setPage(id);
    }

    const toggleSidePanel = () => {
        setSidePanel(!sidePanel);
        setBackdrop(!backdrop);
    }

    return (
        <>
        <Backdrop backdrop={backdrop} toggleBackdrop={ toggleSidePanel }/>
        <div className={styles.appContainer}>
            <div className={styles.scrollBarContainer}>
                <div className={page === 'intro' ? `${styles.scrollBarItem} ${styles.active}` : styles.scrollBarItem} onClick={() => smoothScroll('intro')}>Intro</div>
                <div className={page === 'skills' ? `${styles.scrollBarItem} ${styles.active}` : styles.scrollBarItem} onClick={() => smoothScroll('skills')}>Skills</div>
                <div className={page === 'projects' ? `${styles.scrollBarItem} ${styles.active}` : styles.scrollBarItem} onClick={() => smoothScroll('projects')}>Projects</div>
                <div className={page === 'contact' ? `${styles.scrollBarItem} ${styles.active}` : styles.scrollBarItem} onClick={() => smoothScroll('contact')}>Contact</div>
            </div>
            <DrawToggle toggleSidePanel={ toggleSidePanel }/>
            <SideDrawer sidePanel={sidePanel}/>
            <section className={styles.sidePanel}>
            <SidePanel />
            </section>
            <section className={styles.dashboard}>
            <div className={styles.sectionContainer} id="intro">
                <Intro />
                <About />
            </div>
            <div className={styles.sectionContainer} id="skills">
                <Skills />
            </div>
            <div className={styles.sectionContainer} id="projects">
                <Projects />
            </div>
            <div className={styles.sectionContainer} id="contact">
                <Contact />
            </div>
            </section>
        </div>
      </>
    );
}

export default App;
