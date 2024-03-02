import PopupsManager from "@/layouts/PopupsManager";
import { useState, createContext } from "react";

interface PopupsProps {
  show: boolean;
  setShow: (isShow: boolean) => void;
}

const PopupsContext = createContext<PopupsProps>({
  show: false,
  setShow: (isShow: boolean) => {
    isShow;
  },
});

export const PopupsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  return (
    <PopupsContext.Provider value={{ show, setShow }}>
      {/* <PopupsManager>{children}</PopupsManager> */}
      {children}
    </PopupsContext.Provider>
  );
};

export default PopupsContext;
