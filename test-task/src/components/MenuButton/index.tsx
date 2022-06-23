import React from "react";
import { setFilterData } from "../../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IMenuButton } from "../../types";

const MenuButton = (props: IMenuButton) => {
  const { category, activeButton } = props;
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
    <li
      className="Link-menu"
      onClick={menuHandler}
      style={{ color: activeButton === category ? "#21cf5a" : "#84695a" }}
    >
      {category}
    </li>
  );
};

export default MenuButton;
