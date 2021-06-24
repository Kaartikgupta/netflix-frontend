import classes from './App.css';
import React, {Component} from 'react';
import requests from './Api/api';
import Row from './Row/Row';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <div className={classes.rows}>
          <Header url={requests.fetchNetflixOriginal} />
          <Row title="Netflix Originals" url={requests.fetchNetflixOriginal} />
          <Row title="Top Rated" url={requests.fetchTopRated} />
          <Row title="Trending" url={requests.fetchTrending} />
          <Row title="Action Movie" url={requests.fetchActionMovie} />
          <Row title="Comedy Movie" url={requests.fetchComedyMovie} />
          <Row title="Horror Movie" url={requests.fetchHorrorMovie} />
        </div>
      </div>
    );
  }
}

export default App;
