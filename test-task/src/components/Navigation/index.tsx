import React from "react";
import { setActiveButtonName } from "../../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MenuButton from "../MenuButton";
import "./styles.css";

const listMenu = ["Show All", "Design", "Branding", "Illustration", "Motion"];

const Navigation = () => {
  const dispatch = useAppDispatch();
  const activeButtonName = useAppSelector(
    (state) => state.data.activeButtonName
  );

  const menuHandler = (e: React.MouseEvent) => {
    const target = (e.target as HTMLLIElement).innerHTML;
    dispatch(setActiveButtonName(target));
  };

  return (
    <ul className="Card-menu" onClick={menuHandler}>
      {listMenu.map((item, index) => (
        <MenuButton
          category={item}
          activeButton={activeButtonName}
          key={index}
        />
      ))}
    </ul>
  );
};

export default Navigation;
