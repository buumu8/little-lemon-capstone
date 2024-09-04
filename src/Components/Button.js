import { Link } from "react-router-dom";
const Button = (prop) => {
  return (
    <Link className="button" to={`/${prop.page}`}>
      {prop.content}
    </Link>
  );
};

export default Button;
