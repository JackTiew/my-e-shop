import React, { useEffect, useState } from "react";
import Product from "./product";
import Search from "./search";
import productList from "../data";
import "../styles/listing.css";


const Listing = ({addToCart}) => {
    const [list, setList] = useState([]);

    const searchProducts = (productSearch) => {
        let tempList = productList;
        if(productSearch)
        {
            tempList = productList.filter(product => product.name.toLowerCase().includes(productSearch.toLowerCase()));
        }
        setList(tempList);
    }

    useEffect(() => {
        searchProducts();
    }, []);

    return (
        <div>
            <Search searchProducts={searchProducts}/>

            <div className={list.length > 0 ? "listing-container" : "listing-container-empty"}>
                {
                    list.length > 0 ? 
                    (
                        list.map((product) => (
                            <Product key={product.id} product={product} addToCart={addToCart}/>
                        ))
                    )
                    :
                    (
                        <div className="empty">
                            <span>No data found</span>
                        </div>
                    )                    
                }
            </div>
        </div>
    );
}

export default Listing;