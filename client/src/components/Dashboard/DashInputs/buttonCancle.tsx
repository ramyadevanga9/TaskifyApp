export default function ButtonCancle(props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setState, setIsWrong } = props;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsWrong(false)
        setState(false);
      }}
      className="transition duration-700 ease-in-out text-white bg-red-500 ml-auto mr-auto pt-3 pb-3 font-semibold rounded-lg w-modalInputs hover:bg-red-400 mobile1:w-11/12"
    >
      Cancle
    </button>
  );
}
