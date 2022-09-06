import React from "react";
import CartProduct from "./cart-product";
import productList from "../data";
import "../styles/cart.css"

const Cart = ({cartList, adjustQuantity, removeProduct}) => {
    
    let total = 0;
    let currency = "";

    cartList.forEach(
        product=>{
            currency = productList.find(item => item.id === product.id).currency;
            total += (productList.find(item => item.id === product.id).final_price * product.count);
        }
    );

    total = total.toFixed(2);
    
    return (
        <div className="cartListing">
            <div className="cart-header">
                <span>
                    <i className="cart-icon fas fa-shopping-cart"></i>
                    Shopping Cart
                </span>
            </div>
                {
                    cartList.length > 0 ? 
                    (
                        cartList.map((product) => (
                            <CartProduct key={product.id} product={product} adjustQuantity={adjustQuantity} removeProduct={removeProduct}/>
                        ))
                    )
                    :
                    (
                        <div className="empty">
                            <span>Your cart is empty</span>
                        </div>
                    )                    
                }
                <div>
                {
                    cartList.length > 0 ?
                        <div className="cart-product-container" style={{height: "50px"}}>
                            <div className="total-label">
                                <span>TOTAL</span>
                            </div>
                            <div className="total-price">
                                <span>{currency} {total}</span>
                            </div>
                        </div>
                    : null
                }
                
            </div>
        </div>
    );
};

export default Cart;