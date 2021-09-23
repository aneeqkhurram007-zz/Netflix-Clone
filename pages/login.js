import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Login.module.css'
import SignIn from './signIn'
const Login = () => {
    const [signIn, setsignIn] = useState(false)
    return (
        <div className={styles.loginScreen}>
            <div className={styles.loginScreen__background}>
                <Image alt="Login logo"
                    className={styles.loginScreen__logo}
                    objectFit="containe"
                    width={150}
                    height={100}
                    src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm" />
                <button className={styles.loginScreen__button}
                    onClick={() => setsignIn(true)}
                >Sign In</button>
                <div className={styles.loginScreen__gradient}></div>
            </div>
            <div className={styles.loginScreen__body}>
                {
                    signIn ? <SignIn /> : (
                        <form className={styles.loginScreen__input}>
                            <input type="text" placeholder="Email" />
                            <button className={styles.loginScreen__getStarted}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setsignIn(true);
                                }}
                            >Get Started</button>
                        </form>)
                }

            </div>
        </div>
    )
}

export default Login
