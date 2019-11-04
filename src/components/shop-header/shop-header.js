import React from 'react';
import './shop-header.css';

const ShopHeader = ({ numbItems, total }) => {
    return (
        <header className="shop-header row">
            <a href="#" className="logo text-dark">ReStore</a>
            <a className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numbItems} items (BYN {total})
            </a>
        </header>
    )
};

export default ShopHeader;
