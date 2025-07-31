import { useContext } from "react";
import { isWrongContext } from "../DashTask/dashTaskList";
import { themeContext } from "../../../App";


export default function TaskNameInput(props: {
  inputName: string;
  inputId: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  
}) {
  const { inputName, inputId, value, setValue,  } = props;
  const isWrong = useContext(isWrongContext)
  const theme = useContext(themeContext)
  
  return (
    <input
      type="text"
      onChange={(e) => {
        setValue(e.target.value);
      }}
      name={inputName}
      id={inputId}
      value={value}
      placeholder="Enter the task name"
      className={`modal_input transition   duration-700 ease-in-out ml-auto mr-auto pl-2 pr-2 pt-3 pb-3 w-modalInputs border ${isWrong ? "border-red-500" : "border-transparent"}   outline-none  rounded-lg  ${theme === "dark" ? "bg-stone-700 text-stone-300 placeholder:text-stone-300" : "bg-gray-500 text-gray-500 placeholder:text-gray-500"}  focus:border placeholder:text-base placeholder:font-medium mobile1:w-11/12`}
    />
  );
}
