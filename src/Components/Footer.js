import logo from "../Assets/Asset 9@4x.png";
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <p>Copyright {new Date().getFullYear()} Little Lemon</p>
    </footer>
  );
};

export default Footer;
