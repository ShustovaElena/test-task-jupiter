import CardMenu from "../CardMenu";
import CardsWrapper from "../CardsWrapper";
import "./styles.css";

const BasicBlock = () => {
  return (
    <div className="Basic-block">
      <CardMenu />
      <CardsWrapper />
      <button className="Load-more">Load more</button>
    </div>
  );
};

export default BasicBlock;
