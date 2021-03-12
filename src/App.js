import React,{ useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Routes from './Routes';


//Components
import NavbarComponent from './components/NavbarComponent';
import Searchbar from './components/Searchbar'


export default function App() {
  const [shows, setShows] = useState([])

  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Searchbar setShows={setShows}/>
        <Switch>
            <section>
              <Routes shows={shows}/>
            </section>
          </Switch>
    </Router>
    </div>
  );
}