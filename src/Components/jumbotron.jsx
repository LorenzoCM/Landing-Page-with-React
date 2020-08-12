import React from 'react';
import PropType from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>           
            <a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">{props.buttonLabel}</a>
        </div>
    );
}

Jumbotron.propTypes = {
	title: PropType.string,
	// 2) add here the new properties into the proptypes object	
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};


export default Jumbotron; 