import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <section className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-2 fw-bold text-success" href="/name"> <i className="bi bi-laptop"></i> React Lover's</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto fs-6">
                                    <li className="nav-item">
                                        <a className="nav-link active text-success" aria-current="page" href="/home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-success" href="/item">Devlopers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-success" href="/others">Others</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>
            <section className='container'>
                    <div className='text-center my-4'>
                        <h1 className='text-success fw-bold'>React Lover's: Hire world class devlopers</h1>
                        <h5>We are stunning team to bootsup your online business</h5>
                        <h2 className='fw-bold'>Total Budeget: $200 Million</h2>
                    </div>
            </section>
        </div>
    );
};

export default Header;