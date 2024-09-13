import { useDispatch } from "react-redux";
import { hidePreview } from "../features/preview";

export default function ButtonTab({ id, toggleTab, buttonContent, imgURL }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        toggleTab(id);
        dispatch(hidePreview());
      }}
      className="flex items-center px-3 py-4 focus:bg-slate-600 cursor-pointer hover:bg-slate-600"
    >
      <img className="w-5" src={imgURL} alt="" />
      <span className="text-xl px-2 ">{buttonContent}</span>
    </button>
  );
}
