import React from 'react';
import './Details.css'

const Details = (props) => {
    console.log(props.details)
    const{details} = props
    return (
        <div>
            <div className="card mb-3 h-50 w-100 card-style">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={details.images} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{details.name}</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;