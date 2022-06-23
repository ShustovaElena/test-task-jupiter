import React from "react";
import { setActiveButtonName, setFilterData } from "../../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export interface ICategoryButton {
  category: string;
}

const CategoryButton = (props: ICategoryButton) => {
  const { category } = props;
  const data = useAppSelector((state) => state.data.changedValue);
  const dispatch = useAppDispatch();

  const changeCategory = () => {
    const newData = data.filter((item) => item.category === category);
    dispatch(setFilterData(newData));
    dispatch(setActiveButtonName(category));
  };

  return (
    <button className="Category-button" onClick={changeCategory}>
      {category}
    </button>
  );
};

export default CategoryButton;
