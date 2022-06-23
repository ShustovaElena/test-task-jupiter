import { setFilterData } from "../../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
        <option className="Link-menu" value="Show All">
          Show All
        </option>
        <option className="Link-menu" value="Design">
          Design
        </option>
        <option className="Link-menu" value="Branding">
          Branding
        </option>
        <option className="Link-menu" value="Illustration">
          Illustration
        </option>
        <option className="Link-menu" value="Motion">
          Motion
        </option>
      </select>
    </div>
  );
};

export default Select;
