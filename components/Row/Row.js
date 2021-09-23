import { useEffect, useRef, useState } from 'react';
import axios from '../../axios/axios'
import styles from './Row.module.css'
import Image from 'next/image'
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setmovies] = useState([]);
    const ref = useRef(null)
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    const baseURL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className={styles.row}>
            <h2>{title}</h2>
            <div className={styles.row__posters}>
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <Image
                            ref={ref}
                            className={`${styles.row__poster} ${isLargeRow && styles.row__posterLarge}`}
                            objectFit="contain" key={movie.id} height={200} width={100} alt={title}
                            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`} />
                    )))}
            </div>

        </div>
    )
}

export default Row
