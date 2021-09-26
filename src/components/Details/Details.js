import React from 'react';
import './Details.css'

const Details = (props) => {
    const{details} = props
    return (
        <div className='text-center m-3'>
            <div className="card mb-3 h-50 w-100 card-style mb-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={details.images} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{details.name}</h5>
                        <h6>{details.designation}</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;