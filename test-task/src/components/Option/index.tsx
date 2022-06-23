import { IOption } from "../../types";

export const Option = (props: IOption) => {
  const { nameOption } = props;

  return (
    <option className="Link-menu" value={nameOption}>
      {nameOption}
    </option>
  );
};

export default Option;
