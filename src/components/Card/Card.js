import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, designation, salary, email, phone, country, images} = props.card
    return (
        // show our devloper ditails with card 
        
        <div className="col">
            <div className="card h-100 card-style">
                <div className="card-image-contaienr">
                    <img src={images} className="card-img-top card-image" alt="..." />
                </div>
                <div className="card-body text-center">
                    <h4 className="card-title text-success fw-bold">{name}</h4>
                    <h6 className='mb-4'><span className='fw-bold'>Designation:</span> {designation}</h6>
                    <p><span className='fw-bold'>Email:</span> {email}</p>
                    <h6><span className='fw-bold'>Phone:</span> {phone}</h6>
                    <h6><span className='fw-bold'>Salary:</span> ${salary}</h6>
                    <h6><span className='fw-bold'>Country:</span> {country}</h6>
                    <div className='d-flex justify-content-around align-item-center mt-4'>
                        <a href="https://www.facebook.com/rownok.ritu.1"><i className="fab fa-2x fa-facebook-square text-success"></i></a>
                        <a href="https://www.linkedin.com/signup"><i className="fab fa-2x fa-linkedin text-success"></i></a>
                        <a href="https://twitter.com/?lang=en"><i className="fab fa-2x fa-twitter-square text-success"></i></a>
                        <a href="https://github.com/rownok420"><i className="fab fa-2x fa-github-square text-success"></i></a>
                    </div>
                </div>
                <div className='card-footer text-center py-3'>
                    <button className='btn btn-success px-3' onClick={()=>props.handelAddToCart(props.card)}><i className="fas fa-cart-plus me-2"></i>Hire Developer</button>
                </div>
            </div>
        </div>
    
    );
};

export default Card;