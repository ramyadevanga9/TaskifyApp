import { useContext } from "react";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { themeContext } from "../../../App";

export default function ButtonForm(props: {
    sendDataFun: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }) {
    const { sendDataFun } = props;
    const currentLocation = useCurrentLocation()
    const theme = useContext(themeContext)
    return (
      <button
        onClick={(e) => sendDataFun(e)}
        className={`bg-btnForm1 w-full pb-2 pt-2 font-semibold rounded-xl mt-1 flex justify-center items-center btn_form ${theme === "dark" ? "text-text_dark" : "text-text_light"}`}
      >
        {currentLocation === '/login' ? 'Login' : 'Create'}
      </button>
    );
  }
  