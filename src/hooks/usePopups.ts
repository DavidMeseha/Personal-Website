import { useContext } from "react";
import PopupsContext from "@/context/PopupsContext";

const UsePopups = () => {
  return useContext(PopupsContext);
};

export default UsePopups;
