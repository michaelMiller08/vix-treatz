import Basket from "../Basket/Basket";
import "./ShopItem.css";

export default function ShopItem(props) {
  return (
    <div class="shop--item--container">
      <div class="shop--items">
            <img class="itemImg" src={props.img} ></img>

      <p class="itemTitle">{props.title}</p>
      <p class="itemPrice">£{props.price}</p>
      {/* <button class="itemAddToCart" onClick={() => console.log(props)} >Add To Cart</button> */}

      <button
        class="itemAddToCart"
        onClick={() => {
          props.setItemsInBasket((current) => [
            ...current,
            {
              title: props.title,
              description: props.description,
              img: props.img,
              price: props.price,
              id: props.id,
            },
          ]);
        }}
      >
        Add To Cart
      </button>
      </div>
    </div>
  );
}
