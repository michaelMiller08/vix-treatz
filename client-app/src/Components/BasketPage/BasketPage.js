import "./BasketPage.css";

export default function BasketPage({ funcNav, itemsInBasket }) {
  funcNav(true); 
  let totalCost = 0;
  itemsInBasket.map((item, index) => (totalCost  += parseFloat(item.price)));
  return (
    <div class="customer--basket--page">
        <div class="customer--basket--title">
      <h3> My Cart</h3>
      </div>
      {itemsInBasket.map((item, index) => (
        <div class="customer--basket--items">
          <img src={item.img} class="customer--basket--img" />
          <div class="customer--basket--details">
            <p class="customer--basket--item--title">{item.title}</p>
            <p class="customer--basket--item--price">£{item.price}</p>
          </div>
        </div>
      ))}

<div class="customer--basket--item--total--price--div">
      <p>Subtotal: <span class="customer--basket--item--total--price">£{totalCost.toFixed(2)}</span></p>
      </div>
    </div>
  );
}
