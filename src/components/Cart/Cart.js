import React from 'react';
import Details from '../Details/Details';

const Cart = (props) => {
    const {cart} = props
    // console.log(cart)

    // calculate total salary 
    let totalSalary = 0;
    for(const salary of cart){
        totalSalary = totalSalary + salary.salary
    }


    return (
        <div>
            <div className='text-success mb-4'>
                <h4><i className="fas fa-user-secret me-2"></i>Devlopers added: {cart.length}</h4>
                <h4><i className="fas fa-dollar-sign me-2"></i>Total cost: ${totalSalary}</h4>
            </div>
            <div>
                
                {
                    cart.map(details => <Details key={details.id} details={details} />)
                }
                <div className='text-center'>
                    <button className='btn btn-success px-4'>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;