import React from "react";

const Product = ( {product, addToCart} ) => {
    const {id, image, name, price, currency, final_price} = product;

    return (
        <div className="product-container">
            <div className="product-image-box">
                <img src={image} alt=""/>
            </div>
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-final-price">{currency} {price}</p>
                <p className="product-price">{currency} {final_price}</p>
            </div>
            <div className="buy-btn-container">
                <button className="buy-btn" onClick={() => addToCart(id)}>BUY</button>
            </div>
        </div>
    );
}

export default Product;