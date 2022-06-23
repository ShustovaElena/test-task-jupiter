import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Select from "../Select";

const CardMenu = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
  });

  const checkWidth = () => {
    if (window.screen.width > 1040) return setIsMobile(false);
    return setIsMobile(true);
  };

  return isMobile ? <Select /> : <Navigation />;
};

export default CardMenu;
