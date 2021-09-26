import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, gender, salary, email, phone, country, images} = props.card
    return (
        // show our devloper ditails with card 
        <div>
            <div className="col">
                <div className="card h-100 card-style">
                    <img src={images} className="card-img-top p-3 rounded img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><span className='fw-bold'>Name:</span> {name}</h5>
                        <h6><span className='fw-bold'>Gender:</span> {gender}</h6>
                        <p><span className='fw-bold'>Email:</span> {email}</p>
                        <h6><span className='fw-bold'>Phone:</span> {phone}</h6>
                        <h6><span className='fw-bold'>Salary:</span> ${salary}</h6>
                        <h6><span className='fw-bold'>Country:</span> {country}</h6>
                        <div className='d-flex justify-content-around'>
                            <a href="https://www.facebook.com/rownok.ritu.1"><i className="fab fa-2x fa-facebook-square text-success"></i></a>
                            <a href="https://www.linkedin.com/signup"><i className="fab fa-2x fa-linkedin text-success"></i></a>
                            <a href="https://twitter.com/?lang=en"><i className="fab fa-2x fa-twitter-square text-success"></i></a>
                        </div>
                    </div>
                    <div className='card-footer text-center'>
                        <button className='btn btn-success px-3' onClick={()=>props.handelAddToCart(props.card)}><i className="fas fa-cart-plus me-2"></i>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;