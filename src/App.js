import './App.css';
import React, {Component} from 'react';
import requests from './Api/api';
import Row from './Row/Row';
class App extends Component {
  render(){
    return (
      <div className="App">
       netflix
       <Row title="Netflix Originals" url={requests.fetchTrending} />
      </div>
    );
  }
}

export default App;
