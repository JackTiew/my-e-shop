import React, {useState} from "react";
import Listing from "./components/listing";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (productID) => {
    let tempCartList = cartList;
    if(tempCartList.find(cart=> cart.id === productID))
    {
      tempCartList.find(cart=> cart.id === productID).count++;
    }
    else
    {
      tempCartList.push({id:productID, count: 1});
    }
    setCartList([...tempCartList]);
  }

  const adjustQuantity = (productID, adjustType) => {
    let tempCartList = cartList;
    if(adjustType === "add")
    {
      tempCartList.find(cart=> cart.id === productID).count++;
    }
    else if(adjustType === "deduct")
    {
      tempCartList.find(cart=> cart.id === productID).count--;
      if(tempCartList.find(cart=> cart.id === productID).count === 0)
      {
        tempCartList = tempCartList.filter(product => product.id !== productID);
      }
    }
    setCartList([...tempCartList]);
  }

  const removeProduct = (productID) => {
    setCartList(cartList.filter(product => product.id !== productID));
  }

  return (
      <BrowserRouter>
        <Navbar cartCount={cartList.length}/>
        <Routes>
          <Route path="/" element={<Listing addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cartList={cartList} adjustQuantity={adjustQuantity} removeProduct={removeProduct}/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
