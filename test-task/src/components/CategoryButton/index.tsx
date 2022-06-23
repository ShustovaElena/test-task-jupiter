import React from "react";
import { setFilterData } from "../../redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface ICategoryButton {
  category: string;
}

const CategoryButton = (props: ICategoryButton) => {
  const { category } = props;
  const data = useAppSelector((state) => state.data.changedValue);
  const dispatch = useAppDispatch();

  const changeCategory = () => {
    const newData = data.filter((item) => item.category === category);
    dispatch(setFilterData(newData));
  };

  return (
    <button className="Category-button" onClick={changeCategory}>
      {category}
    </button>
  );
};

export default CategoryButton;
