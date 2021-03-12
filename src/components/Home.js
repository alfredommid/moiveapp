import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from './ShowCard'
import {CardColumns} from 'reactstrap';

const Home = ({shows}) => {
    /*
    shows.show-->
    show.name
    show.image.medium
    show.id

    */ 
   const showResults = () => {
       return shows.map(showObj => {
           const{show} = showObj;

           return <ShowCard 
                    key={show.id}
                    id={show.id}
                    image={
                        show.image
                            ? show.image.medium
                            : ''
                    }
                    summary={show.summary}
                    name={show.name}/>
       });
   }

    return(
        <div className="container d-flex justify-content-center">
            <CardColumns>
            {
                shows.length > 0
                    ? showResults()
                    : <h1>Welcome</h1>
            }
            </CardColumns>
        </div>
    );
}

Home.propTypes= {
    shows: PropTypes.array.isRequired
}

export default Home;