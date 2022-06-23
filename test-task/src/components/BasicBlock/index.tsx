import { data2 } from "../../data";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CardMenu from "../CardMenu";
import CardsWrapper from "../CardsWrapper";
import { setFilterData, setLoadData } from "../../redux/dataSlice";
import "./styles.css";

const BasicBlock = () => {
  const data = useAppSelector((state) => state.data.initialData);
  const dispatch = useAppDispatch();

  const loadData = () => {
    const newData = [...data, ...data2];
    console.log(newData);
    dispatch(setLoadData(newData));
    dispatch(setFilterData(newData));
  };

  return (
    <div className="Basic-block">
      <CardMenu />
      <CardsWrapper />
      <button className="Load-more" onClick={loadData}>
        Load more
      </button>
    </div>
  );
};

export default BasicBlock;
