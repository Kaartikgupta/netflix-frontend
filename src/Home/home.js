import React from 'react'
import classes from '../App.css';
import requests from '../Api/api';
import Row from '../Row/Row';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
const home =(props)=>{
    return(
        <div>
            <Navbar currentUser={props.currentUser}/>
            <div className={classes.rows}>
                <Header url={requests.fetchNetflixOriginal} currentUser={props.currentUser} />
                <Row title="Netflix Originals" url={requests.fetchNetflixOriginal} currentUser={props.currentUser}/>
                <Row title="Top Rated" url={requests.fetchTopRated} currentUser={props.currentUser}/>
                <Row title="Trending" url={requests.fetchTrending} currentUser={props.currentUser}/>
                <Row title="Action Movie" url={requests.fetchActionMovie} currentUser={props.currentUser}/>
                <Row title="Comedy Movie" url={requests.fetchComedyMovie} currentUser={props.currentUser} />
                <Row title="Horror Movie" url={requests.fetchHorrorMovie} currentUser={props.currentUser} />
            </div>
        </div>
    )
}
export default home