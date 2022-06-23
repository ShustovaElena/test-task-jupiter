import { useAppSelector } from "../../redux/hooks";
import Card from "../Card";
import "./styles.css";

const CardsWrapper = () => {
  const data = useAppSelector((state) => state.data.changedValue);

  return (
    <div className="Card-wrapper">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default CardsWrapper;
