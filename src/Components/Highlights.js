import Button from "./Button";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import MenuCard from "./MenuCard";
const Highlights = () => {
  return (
    <section className="highlight">
      <section className="specials">
        <h1 className="specialTitle">This weeks specials!</h1>
        <Button content="Online Menu" page="menu" />
      </section>
      <section className="preview-menus">
        <MenuCard image={img1} title="Spaghetti Garlic" price={12.99} />
        <MenuCard image={img2} title="Spaghetti Cabonara" price={10.99} />
        <MenuCard image={img3} title="Spaghetti Pomodoro" price={11.99} />
      </section>
    </section>
  );
};

export default Highlights;
