import basketIcon from "../../Images/basketicon.png";
import "./Basket.css";
import React from "react";
import {  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export default function Basket(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        class="basket--container"
        onClick={() => {
          navigate('basket')

        }}

        
      >
         {/* <Link to="basket"></Link> */}
        <img class="basket--icon" src={basketIcon} />
        <span class="basket--counter">{props.itemsInBasket.length}</span>
      </div>
    </div>
  );
}

{
  /* <div class="basket--container" onClick={() => props.itemsInBasket.map(item => {
  console.log(item)
})}> */
}
