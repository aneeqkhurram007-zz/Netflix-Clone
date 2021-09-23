import '../styles/globals.css'
import Head from 'next/head'
import reducer from "../reducer/reducer"
import initialState from "../reducer/initialState"
import { StateProvider } from '../StateProvider/StateProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png"
          type="image/icon" />
      </Head>
      <StateProvider initialState={initialState} reducer={reducer} >

        <Component {...pageProps} />
      </StateProvider>
    </>
  )
}

export default MyApp
