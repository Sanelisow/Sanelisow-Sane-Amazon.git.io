import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results"
import requests from "../utils/requests";
import Thumbnail from "../components/Thumbnail";

export default function Home({results}) {
  
  return (
    <div>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico"/>
  
      </Head>
     
      <Header />
      <Nav/>
      <Results results={results}/>

      </div>
      
  );
}

// server side redering
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url||requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props:{
      results: request.results,
    },
  };
}