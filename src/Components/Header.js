import logo from "../Assets/Asset 16@4x.png";
import Nav from "./Nav";
const Header = (props) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
