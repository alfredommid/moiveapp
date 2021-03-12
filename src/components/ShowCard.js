import { PropTypes } from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {
  Card,
  CardImg, 
  CardTitle, 
  CardBody
} from 'reactstrap';

const ShowCard = ({id, image,name}) => {
  return (
      <div className="container">
        <Link to={`shows/${id}`}>
          <Card className="mb-3 mt-3" style={{width: "200px", background:"#E0322F"}}>
            <span className="d-flex justify-content-center" style={{color:"#240C26"}}>{id}</span>
            <CardImg className='p-2' top width="100%" src={image} alt="Show Image" />
            <CardBody>
              <CardTitle className="text-center" style={{color:"#240C26"}} tag="h5">{name}</CardTitle>
            </CardBody>
          </Card>
        </Link>
        
      </div>
  );
};

ShowCard.propTypes = {
  id: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ShowCard;