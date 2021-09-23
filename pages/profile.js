import styles from '../styles/Profile.module.css'
import Nav from '../components/Navbar/Nav'
import Image from 'next/image'
import { useStateValue } from '../StateProvider/StateProvider'
import { auth } from '../firebase/firebase'
import { signOut } from 'firebase/auth'
import { useEffect } from 'react'
import router from 'next/router'
const Profile = () => {
    const [{ user }] = useStateValue()
    useEffect(() => {
        console.log(user);
    }, [user])
    return (
        <div className={styles.profile}>
            <Nav />
            <div className={styles.profile__body}>
                <h1>Edit Profile</h1>
                <div className={styles.profile__info}>
                    <Image
                        alt="Avatar"
                        width={100}
                        height={100}
                        src="https://e7.pngegg.com/pngimages/931/209/png-clipart-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black.png"

                    />
                    <div className={styles.profile__detail}>
                        <h2>{user?.email}</h2>
                        <div className={styles.profile__plans}>
                            <h3>Plans</h3>
                            <button onClick={() => {
                                signOut(auth)
                                router.replace('/')
                            }} className={styles.profile__signOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
