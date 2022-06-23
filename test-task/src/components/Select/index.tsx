import { LIST_MENU } from "../../constants";
import { setFilterData } from "../../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Option } from "../Option";
import "./styles.css";

const Select = () => {
  const data = useAppSelector((state) => state.data.initialData);
  const dispatch = useAppDispatch();

  const menuHandler = (e: React.ChangeEvent) => {
    const target = (e.target as HTMLSelectElement).value;
    let newData = data.filter((item) => item.category === target);

    if (target === "Show All") {
      newData = data;
    }

    dispatch(setFilterData(newData));
  };

  return (
    <div className="select">
      <select name="card-menu" onChange={menuHandler}>
        {LIST_MENU.map((item, index) => (
          <Option nameOption={item} key={index} />
        ))}
      </select>
    </div>
  );
};

export default Select;
