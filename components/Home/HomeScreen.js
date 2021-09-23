import requests from '../../Request/request'
import Banner from '../Banner/Banner'
import Nav from '../Navbar/Nav'
import Row from '../Row/Row'
import styles from './HomeScreen.module.css'
const HomeScreen = () => {
    return (
        <div className={styles.homeScreen}>
            <Nav />
            <Banner />
            <Row title={requests.fetchNetflixOriginals.title} fetchUrl={requests.fetchNetflixOriginals.url}
                isLargeRow
            />
            <Row title={requests.fetchTrending.title} fetchUrl={requests.fetchTrending.url}

            />

            <Row title={requests.fetchTopRated.title} fetchUrl={requests.fetchTopRated.url}

            />
            <Row title={requests.fetchActionMovies.title} fetchUrl={requests.fetchActionMovies.url}

            />
            <Row title={requests.fetchComedyMovies.title} fetchUrl={requests.fetchComedyMovies.url}

            />
            <Row title={requests.fetchHorrorMovies.title} fetchUrl={requests.fetchHorrorMovies.url}

            />
            <Row title={requests.fetchRomanceMovies.title} fetchUrl={requests.fetchRomanceMovies.url}

            />


        </div>
    )
}

export default HomeScreen
