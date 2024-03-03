import PopupsManager from "@/layouts/PopupsManager";
import { useState, createContext, Dispatch } from "react";

interface PopupsProps {
  graphicProject: { show: boolean; img: string };
  setGraphicProject: Dispatch<
    React.SetStateAction<{ show: boolean; img: string }>
  >;
}

const PopupsContext = createContext<PopupsProps>({
  graphicProject: { show: false, img: "" },
  setGraphicProject: (
    isShow: React.SetStateAction<{ show: boolean; img: string }>
  ) => {
    isShow;
  },
});

export const PopupsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [graphicProject, setGraphicProject] = useState({
    show: false,
    img: "",
  });

  return (
    <PopupsContext.Provider value={{ graphicProject, setGraphicProject }}>
      <PopupsManager>{children}</PopupsManager>
    </PopupsContext.Provider>
  );
};

export default PopupsContext;
