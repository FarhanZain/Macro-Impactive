import { Link } from "react-router-dom";
import PopUpRegis from "./popUpRegis";

export default function ButtonSecondary(props) {
  return (
    <>
      <Link to={props.link}>
        <button
          data-modal-target={props.modalID}
          data-modal-toggle={props.modalID}
          type="button"
          className="text-white flex items-center gap-3 bg-secondary hover:bg-secondary-hover font-semibold font-poppins rounded-lg text-lg px-5 py-3 "
        >
          {props.iconLeft}
          {props.TextButton}
        </button>
      </Link>
      {/* <PopUpRegis /> */}
    </>
  );
}
