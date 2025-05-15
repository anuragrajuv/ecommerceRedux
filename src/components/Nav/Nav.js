import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import './Nav.css'; // Optional: create this file for styling
import { FaCartShopping } from 'react-icons/fa6';
import { cartSelector } from '../../redux/cartSlice';

const Nav = () => {
    const cartItems = useSelector(cartSelector);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">
                    <img src="/logo192.png" alt="Logo" height="40" />
                </NavLink>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/add-product">Add a Product</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                        <FaCartShopping/> <span className="cart-count">{cartItems.length}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    );
};

export default Nav;