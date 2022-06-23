import "./styles.css";

const Select = () => {
  return (
    <div className="select">
      <select name="card-menu">
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
