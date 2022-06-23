import { useState } from "react";
import { ICard } from "../../types";
import "./styles.css";

const Card = (props: ICard) => {
  const { src, name, category } = props;
  const [isActive, setIsActive] = useState(false);

  const addActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="Card"
      style={{
        backgroundImage: `url("./img/${src}")`,
        border: isActive ? "4px solid #21cf5a" : "none",
      }}
      onClick={addActiveClass}
    >
      <button className="Category-button">{category}</button>
      <p className="Card-name">{name}</p>
    </div>
  );
};

export default Card;
