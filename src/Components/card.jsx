import React from 'react';
import PropType from 'prop-types';

const Card = (props) => {
    return (      
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="card-footer text-center">
          <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
          </div>
        </div>           
    );
}

Card.propTypes = {
	img: PropType.string, 
	// 2) add here the new properties into the proptypes object	
  title: PropType.string, 
  description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};


export default Card; 