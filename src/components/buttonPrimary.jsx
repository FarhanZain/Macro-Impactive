import { Link } from "react-router-dom";

export default function ButtonPrimary(props) {
  return (
    <>
      <Link to={props.link}>
        <button
          type="button"
          className="flex items-center gap-3 text-white bg-primary hover:bg-primary-hover font-semibold font-poppins rounded-lg text-lg px-5 py-3 "
        >
          {props.iconLeft}
          {props.TextButton}
        </button>
      </Link>
    </>
  );
}
