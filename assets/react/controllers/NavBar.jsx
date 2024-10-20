import React, { useState, useEffect } from 'react';

function NavBar({ fullCartQuantity, parentCategories, user }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        feather.replace();
    });

    const renderCategories = () => {
        return parentCategories.map((category) => (
            <li className="nav-item" key={category.slug}>
                <a href={`/category/${category.slug}`} className="nav-link">{category.name}</a>
            </li>
        ));
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://img.icons8.com/3d-fluency/94/palm-tree--v2.png" alt="Palmier" className="palmier-icon" />
                    Home
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {renderCategories()}
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/account">
                                <i data-feather="user" className="icon"></i>
                            </a>
                        </li>
                        {user && (
                            <li className="nav-item">
                                <a className="nav-link" href="/wishlist">
                                    <i data-feather="heart" className="icon"></i>
                                </a>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <i data-feather="shopping-cart" className="icon"></i>
                                <span className="badge bg-primary rounded-pill">{fullCartQuantity}</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                <i data-feather="search" className="icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
