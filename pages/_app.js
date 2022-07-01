import  "../style/global.css";
import Head from 'next/head'


export default function MyApp ({ Component, pageProps }) {
    return (
        <>
        <Head>
        <title>Challeng front-end</title>
        <meta name="description" content="Challeng front-end"></meta>
        </Head>
        <Component {...pageProps} />
     </>
     )
  }
  