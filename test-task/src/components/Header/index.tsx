import "./styles.css";

const Header = () => {
  return (
    <div className="Header">
      <img className="Logo" src="./logo.png" alt="logo" />
      <nav className="Navbar">
        <a className="Link" href="#">
          About
        </a>
        <a className="Link" href="#">
          Services
        </a>
        <a className="Link" href="#">
          Pricing
        </a>
        <a className="Link" href="#">
          Blog
        </a>
      </nav>
      <button className="Contact-button">Contact</button>
    </div>
  );
};

export default Header;
