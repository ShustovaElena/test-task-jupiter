import React, { useState } from "react";
import { ICard } from "../../types";
import CategoryButton from "../CategoryButton";
import DeleteButton from "../DeleteButton";
import "./styles.css";

const Card = (props: ICard) => {
  const { src, name, category } = props;
  const [isActive, setIsActive] = useState(false);

  const addActiveClass = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).innerHTML !== category) {
      setIsActive(!isActive);
    }
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
      <CategoryButton category={category} />
      <p className="Card-name">{name}</p>
      {isActive && <DeleteButton name={name} />}
    </div>
  );
};

export default Card;
