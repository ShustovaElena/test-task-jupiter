import { ICard } from "../../types";
import "./styles.css";

const Card = (props: ICard) => {
  const { src, name, category } = props;

  return (
    <div className="Card" style={{ backgroundImage: `url("./img/${src}")` }}>
      <button className="Category-button">{category}</button>
      <p className="Card-name">{name}</p>
    </div>
  );
};

export default Card;
