import MainText from "../MainText";
import Menu from "../Menu";
import "./styles.css";

const Header = () => {
  return (
    <div className="Header">
      <Menu />
      <MainText />
    </div>
  );
};

export default Header;
