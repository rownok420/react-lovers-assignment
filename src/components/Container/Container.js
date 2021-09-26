import React,{useState, useEffect} from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Container = () => {

    const [card, setCard] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./devloper.JSON')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])


    // added handler for add to cart 
    const handelAddToCart = person => {
        const newCart = [...cart, person]
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className='row'>
                {/* card section here */}
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            card.map(card => <Card key={card.id} handelAddToCart={handelAddToCart} card={card} />)
                        }
                    </div>
                </div>
                {/* cart section here  */}
                <div className="col-md-3">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Container;