import React from "react";
import productList from "../data";

const CartProduct = ({product, adjustQuantity, removeProduct}) => {
    const {id, count} = product;
    var currentProduct = productList.find(item => item.id === id);

    return (
        <div className="cart-product-container">
            <div className="cart-product-image-container">
                <img className="cart-product-image" src={currentProduct.image} alt=""/>
            </div>
            <div className="cart-product-name">
                <p>{currentProduct.name}</p>
            </div>
            <div className="cart-product-price-container">
                <div className="cart-product-final-price">
                    <p>{currentProduct.currency} {currentProduct.final_price.toFixed(2)}</p>
                </div>
                <div className="cart-product-price">
                    <p>{currentProduct.currency} {currentProduct.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="cart-product-adjust-container">
                <button className="cart-product-adjust-btn" onClick={() => adjustQuantity(id,"deduct")}>-</button>
                <div className="cart-product-qty-count">{count}</div>
                <button className="cart-product-adjust-btn" onClick={() => adjustQuantity(id,"add")}>+</button>
            </div>
            <div className="cart-product-total">
                <p>{currentProduct.currency} {(count * currentProduct.final_price).toFixed(2)}</p>
            </div>
            <div className="cart-remove-btn">
                <p onClick={() => removeProduct(id)}>Remove</p>
            </div>
        </div>
    )
}

export default CartProduct;