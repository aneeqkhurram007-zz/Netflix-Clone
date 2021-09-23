import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'
import { useRef } from 'react'
import { auth } from '../firebase/firebase'
import styles from '../styles/SignIn.module.css'
const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then(() => alert('Registered Successfully'))
    }
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then(() => alert('Signed In')).catch((e) => alert(e.message))
    }
    return (
        <div className={styles.signIn}>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className={styles.signInGray}>New to Netflix?</span>
                    <span className={styles.signInLink} onClick={register} > Sign Up now </span> </h4>
            </form>
        </div>
    )
}

export default SignIn
