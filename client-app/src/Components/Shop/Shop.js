import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";

export default function Shop({ funcNav, itemsInBasket, setItemsInBasket }) {
  funcNav(true);

  let items = [
    {
      title: "Wedding cake",
      img: "https://images.unsplash.com/photo-1604702433171-33756f3f3825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis magna quis placerat porttitor. Mauris venenatis lacus a tortor sodales, ac tempor erat porta. Fusce quis elementum augue. Morbi vehicula malesuada elementum. Quisque aliquet eget dolor id posuere. Nunc sit amet ultricies justo, sit amet imperdiet leo.",
      price: "2.99",
      id: "1",
    },
    {
      title: "Cup Cakes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Funfetti-cupcakes-2c4c511.jpg?quality=90&resize=556,505",
      description:
        "15 cupcakes ingredients follow as such:ssssed et lorem vehicula, malesuada nisi vitae, egestas enim. Quisque diam ante, aliquam nec quam in, luctus aliquet nisl. Cras rutrum justo vel sapien dignissim, a aliquam justo aliquam. Nam pretium id risus ut rhoncus. Etiam metus justo, cursus et nisi eu, luctus hendrerit orci. Vivamus et ligula lacinia, tristique erat mattis, mattis ex.",
      price: "13.99",
      id: "2",
    },
  ];

  return (
    <div class="shop--container">
      <div class="shop--item">
        {items.map((item, index) => (
          <ShopItem
            key={index}
            title={item.title}
            img={item.img}
            description={item.description}
            price={item.price}
            temsInBasket={itemsInBasket}
            setItemsInBasket={setItemsInBasket}
          />
        ))}
      </div>
    </div>
  );
}
