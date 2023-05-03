import { Link } from "react-router-dom";

export default function ButtonSecondary(props) {
  return (
    <>
      <Link to={props.link}>
        <button
          type="button"
          className="text-white flex items-center gap-3 bg-secondary hover:bg-secondary-hover font-semibold font-poppins rounded-lg text-lg px-5 py-3 "
        >
          {props.iconLeft}
          {props.TextButton}
        </button>
      </Link>
    </>
  );
}
