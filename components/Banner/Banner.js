import { useEffect, useState } from 'react'
import axios from '../../axios/axios'
import requests from '../../Request/request'
import styles from './Banner.module.css'
const Banner = () => {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals.url)
            setmovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request
        }
        fetchData()
    }, [])
    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string
    }
    return (
        <header className={styles.banner} style={{
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
        }}>
            <div className={styles.banner__contents}>
                <h1 className={styles.banner__title}>{movies?.title || movies?.name || movies?.original_name}</h1>
                <div className={styles.banner__buttons}>
                    <button className={styles.banner__button}>Play</button>
                    <button className={styles.banner__button}>My List</button>
                </div>
                <h1 className={styles.banner__description}>{
                    truncate(movies?.overview, 150)

                }</h1>
            </div>
            <div className={styles.banner__fadeBottom}>

            </div>
        </header>
    )
}

export default Banner
