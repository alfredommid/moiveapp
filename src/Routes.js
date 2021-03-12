import React from 'react';
import {Route} from 'react-router-dom';
//import Peticiones from './components/Peticiones';
import Home from './components/Home'
import PropTypes from 'prop-types';
import Show from './components/Show'

function Routes({shows}) {
    return(
        <>
            <Route exact path="/">
                <Home shows={shows}/>
            </Route>
            <Route exact path="/shows/:idShow">
                <Show/>
            </Route>
        </>
    )
}

Routes.propTypes = {
    shows: PropTypes.array.isRequired
}

export default Routes;