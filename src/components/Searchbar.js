import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import './searchbar.scss';
import axios from 'axios';
import PropTypes from 'prop-types';

const Searchbar = ({setShows}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [search, setSearch] = useState('');

  const getShows = async() => {
    if(search.length < 2) return alert('Valor no válido');
    const url_shows= `http://api.tvmaze.com/search/shows?q=${search}`;
    const {data} = await axios.get(url_shows);
    setShows(data);
  }

    return (
        <div className="container mt-5">
          <div className="search-text">
            <h5 className="search-text" onClick={toggle}>Search</h5>
          </div>
          <Collapse isOpen={isOpen}>
            <Card style={{background:'#E0322F'}}>
              <CardBody>
                <input
                onChange={(e) => setSearch(e.target.value)}
                type="text" 
                placeholder="Search a chou" 
                className="search-input"></input>
                <span className="lupa">
                  <svg 
                  onClick={getShows}
                  className="lupa mx-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"><path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></span>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      );
    
} 

Searchbar.propTypes = {
  setShows: PropTypes.func.isRequired,
}

export default Searchbar;