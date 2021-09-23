import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'
import router from 'next/router'
const Nav = () => {
    const [show, setShow] = useState(false)
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => {
            window.removeEventListener('scroll', transitionNavbar)
        }
    }, [])
    return (
        <div className={`${styles.nav__black} ${show && styles.nav}`}>
            <div className={styles.nav__contents}>
                <Image alt="Nav Logo"
                    onClick={() => {
                        router.push('/')
                    }}
                    height={80}
                    width={160}
                    className={styles.nav__logo}
                    src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm" />
                <Image
                    alt="Avatar"
                    width={80}
                    height={30}
                    onClick={() => {
                        router.push('/profile')
                    }}
                    className={styles.nav__avatar}
                    src="https://e7.pngegg.com/pngimages/931/209/png-clipart-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black.png" />

            </div>
        </div>
    )
}

export default Nav
