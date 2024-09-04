import Button from "./Button";
import banner from "../Assets/banner.jpg";
const Hero = (prop) => {
  return (
    <section className="hero">
      <article>
        <h1 className="heroTitle">
          Little Lemon
          <span>
            <h2 className="heroSubtitle">Chicago</h2>
          </span>
          <span>
            <p className="heroParagraph">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </span>
        </h1>
        <Button content="Order now!" page="order-online" />
      </article>
      <img src={banner} alt="banner" />
    </section>
  );
};

export default Hero;
