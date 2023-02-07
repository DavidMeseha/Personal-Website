import { useContext } from "react";
import NavContext from "../context/NavStateProvider";

const UseNavState = () => {
    return (useContext(NavContext))
};
export default UseNavState;