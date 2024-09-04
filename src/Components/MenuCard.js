import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const MenuCard = (props) => {
  return (
    <article className="menu-card">
      <img src={props.image} alt={props.title} />
      <section className="menu-card-text">
        <h1 class="menu-card-text-title">
          {props.title}
          <span>$ {props.price}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum neque minima illo cum placeat sequi asperiores veniam, totam vel recusandae
          quas unde alias illum nobis ratione odit molestias voluptatibus nihil?
        </p>

        <Link className="menu-card-link" to="/order-online">
          Order a delivery <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </section>
    </article>
  );
};

export default MenuCard;
