import MenuCard from "../Components/MenuCard";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";
import img6 from "../Assets/img6.jpg";
const Menu = (props) => {
  const menu = [
    { image: img1, title: "Spaghetti Garlic", price: "12.99" },
    { image: img2, title: "Spaghetti Cabonara", price: "10.99" },
    { image: img3, title: "Spaghetti Pomodoro", price: "11.99" },
    { image: img4, title: "Pizza", price: "13.99" },
    { image: img5, title: "Salad", price: "7.99" },
    { image: img6, title: "Soup", price: "6.99" },
  ];
  return (
    <section className="menu">
      <h1>Menu</h1>
      <section className="preview-menus">
        {menu.map((item) => (
          <MenuCard image={item.image} title={item.title} price={item.price} />
        ))}
      </section>
    </section>
  );
};

export default Menu;
