import "./BasketPage.css";

export default function BasketPage({ funcNav, itemsInBasket }) {
  funcNav(true);

  return (
    <div class="customer--basket--page">
      <h3> My Cart</h3>
      {itemsInBasket.map((item, index) => (
       <div class="customer--basket--items">
       <img src={item.img} class="customer--basket--img" />
       <div class="customer--basket--details">
         <p class="customer--basket--item--title">{item.title}</p>
         <p class="customer--basket--item--price">£{item.price}</p>
       </div>
     </div>
      ))}
    </div>
  );
}
