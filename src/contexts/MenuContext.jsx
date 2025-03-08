import { useEffect, useState } from "react";
import { createContext } from "react";
import { getSession } from "../utils/storage/session";
import { jsonParse } from "../utils/jsonConverter/jsonConverter";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isVertical, setIsVertical] = useState(false);
  const [showSide, setShowSide] = useState(false);

  useEffect(() => {
    const jsonVertical = getSession("isVertical");
    if (!jsonVertical) {
      return;
    }

    const isVertical = jsonParse(jsonVertical);
    setIsVertical(isVertical);
  }, []);

  const menuValues = {
    isVertical,
    setIsVertical,
    showSide,
    setShowSide,
  };

  return (
    <MenuContext.Provider value={menuValues}>{children}</MenuContext.Provider>
  );
};

export default MenuContext;
