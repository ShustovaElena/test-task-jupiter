import React from "react";
import { setFilterData } from "../../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./styles.css";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.initialData);

  const menuHandler = (e: React.MouseEvent) => {
    const target = (e.target as HTMLLIElement).innerHTML;
    let newData = data.filter((item) => item.category === target);
    if (target === "Show All") {
      newData = data;
    }
    dispatch(setFilterData(newData));
  };

  return (
    <ul className="Card-menu" onClick={menuHandler}>
      <li className="Link-menu">Show All</li>
      <li className="Link-menu">Design</li>
      <li className="Link-menu">Branding</li>
      <li className="Link-menu">Illustration</li>
      <li className="Link-menu">Motion</li>
    </ul>
  );
};

export default Navigation;
