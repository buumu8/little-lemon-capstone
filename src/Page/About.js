import banner from "../Assets/banner.jpg";
const About = () => {
  return (
    <section className="about">
      <article>
        <h1 className="aboutTitle">
          About
          <span>
            <h2 className="aboutSubtitle">Little Lemon @ Chicago</h2>
          </span>
          <span>
            <p className="aboutParagraph">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </span>
        </h1>
      </article>
      <section className="aboutImages">
        <img src={banner} alt="banner" />
      </section>
    </section>
  );
};

export default About;
