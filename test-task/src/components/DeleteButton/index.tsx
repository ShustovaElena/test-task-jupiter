import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setFilterData, setLoadData } from "../../redux/dataSlice";
import "./styles.css";

interface IDelButton {
  name: string;
}

const DeleteButton = (props: IDelButton) => {
  const { name } = props;
  const data = useAppSelector((state) => state.data.changedValue);
  const initialData = useAppSelector((state) => state.data.initialData);
  const dispatch = useAppDispatch();

  const deleteCard = () => {
    const newData = data.filter((item) => item.name != name);
    const newInitData = initialData.filter((item) => item.name != name);
    dispatch(setFilterData(newData));
    dispatch(setLoadData(newInitData));
  };

  return (
    <button className="Delete-button" onClick={deleteCard}>
      Del
    </button>
  );
};

export default DeleteButton;
