import data from "../../data";
import Card from "../Card";
import "./styles.css";

const CardsWrapper = () => {
  return (
    <div className="Card-wrapper">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default CardsWrapper;
