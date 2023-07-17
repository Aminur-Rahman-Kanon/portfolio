import React, { useState, useEffect, useRef } from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import Spinner from '../Others/Spinner/spinner';
import Backdrop from '../Others/Backdrop/backdrop';
import Modal from '../Others/Modal/modal';

function Contact() {
    
    const formRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidity, setEmailValidity] = useState(true);
    const [message, setMessage] = useState('');
    const [submitBtnDisable, setSubmitBtnDisable] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (backdrop){
            disableScroll()
        }

        else {
            window.onscroll = () => {}
        }
    }, [backdrop])

    const disableScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (email){
                const checkAt = email.includes('@');
                const checkDot = email.includes('.com');
                if (checkAt && checkDot){
                    const domain = email.slice(email.indexOf('@')+1, email.indexOf('.com'));
                    if (domain){
                        setEmailValidity(true);
                    }
                    else {
                        setEmailValidity(false);
                    }
                }
                else {
                    setEmailValidity(false);
                }
            }
        }, 1200)

        return () => clearTimeout(timer);
    }, [email])

    useEffect(() => {
        if (name && (email && emailValidity) && message){
            setSubmitBtnDisable(false);
        }
        else {
            setSubmitBtnDisable(true);
        }
    }, [name, email, message]);

    const submitHandller = (e) => {
        e.preventDefault();
        setSpinner(true);

        try {
            emailjs.sendForm('service_yh1rqbo', 'template_aq68yod', formRef.current, 'fKTzucLUnrZtv4S0l')
            .then(res => {
                if (res.status === 200) {
                    setSpinner(false);
                    setBackdrop(true);
                    setStatus('success');
                    setModal(true);
                }
            })
            .catch(err => {
                setSpinner(false);
                setBackdrop(true);
                setStatus('error');
                setModal(true);
            })
        } catch (error) {
            setSpinner(false);
            setBackdrop(true);
            setStatus('error');
            setModal(true);
        }
    }

    const closeModal = () => {
        setStatus('');
        setModal(false);
        setBackdrop(false);
    }

    let displayStatusMsg = <div className={styles.statusMsgContainer}>
        <h3 className={styles.statusMsgH3}>Something went wrong</h3>
        <p className={styles.statusMsgP}>I am working to fix it</p>
        <p className={styles.statusMsgP}>Please try again a bit later</p>
        <button className={styles.statusMsgBtn} onClick={ closeModal }>Ok</button>
    </div>;

    if (status === 'success'){
        displayStatusMsg = <div className={styles.statusMsgContainer}>
            <h3 className={styles.statusMsgH3}>Email has been sent</h3>
            <p className={styles.statusMsgP}>I will get back to ASAP</p>
            <button className={styles.statusMsgBtn} onClick={() => window.location.reload()}>Have a Nice Day!</button>
        </div>
    }

    return (
        <>
        <Backdrop backdrop={backdrop} />
        <Spinner spinner={spinner} />
        <Modal modal={modal}>
            {displayStatusMsg}
        </Modal>
        <div className={styles.contactContainer} id="contact">
            <h3 className={styles.contactH3}>Contact</h3>
            <p className={styles.contactP}>I would love to discuss how I can contribute to your projects or answer any questions you may have. Feel free to reach out to me through the following channels:</p>
            <div className={styles.contactInfoContainer}>
                <p className={styles.contactP}><strong>Email:</strong> md.aminur.rahman.kanon@gmail.com</p>
                <p className={styles.contactP}><strong>Phone:</strong> +447510268021</p>
            </div>
            <p className={styles.contactP}>You can also find me on <a href='https://linkedin.com/in/aminur-rahman-kanon' target='_blank' className={styles.linkedin}>Linkedin</a> to connect professionally and stay updated on my latest projects and endeavors.</p>
            <p className={styles.contactP}>I look forward to hearing from you and exploring opportunities to collaborate!</p>

            <form className={styles.formContainer} ref={formRef} onSubmit={submitHandller}>
                <div className={styles.formInputContainer}>
                    <FontAwesomeIcon icon={faUser} className={styles.contactFormIcon} />
                    <input type='text'
                           className={styles.contactFormInput}
                           name='name'
                           placeholder='Name'
                           onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.formInputContainer}>
                    <FontAwesomeIcon icon={faAt} className={styles.contactFormIcon} />
                    <input type='email'
                           className={emailValidity ? styles.contactFormInput : `${styles.contactFormInput} ${styles.wrongInput}`}
                           name='email'
                           placeholder='Email'
                           onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.formTextareaContainer}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.contactFormIcon} />
                    <textarea className={styles.contactFormTextarea}
                              placeholder='Message'
                              name='message'
                              maxLength="500"
                              onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button disabled={submitBtnDisable} className={styles.submitBtn}>SEND MESSAGE</button>
            </form>
        </div>
        </>
    )
}

export default Contact;
