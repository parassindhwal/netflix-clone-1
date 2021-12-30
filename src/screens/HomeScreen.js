import React from 'react';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Row from '../components/Row';
import requests from '../Requests';
import "./HomeScreen.css";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* NavBar */}
            <Nav />
  
            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row 
                title='NETFLIX ORIGINALS'
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow 
            />
            <Row 
                title='Trending Now'
                fetchURL={requests.fetchTrending} 
            />
            <Row 
                title='Top Rated'
                fetchURL={requests.fetchTopRated} 
            />
            <Row 
                title='Action Movies'
                fetchURL={requests.fetchActionMovies} 
            />
            <Row 
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies} 
            />
            <Row 
                title='Horror Movies'
                fetchURL={requests.fetchHorrorMovies} 
            />
            <Row 
                title='Romance Movies'
                fetchURL={requests.fetchRomanceMovies} 
            />
            <Row 
                title='Documentaries Movies'
                fetchURL={requests.fetchDocumentaries} 
            />
        </div>
    )
}

export default HomeScreen
