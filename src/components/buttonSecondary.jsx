export default function ButtonSecondary(props) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-secondary hover:bg-secondary-hover font-semibold font-poppins rounded-lg text-lg px-5 py-3 "
      >
        {props.TextButton}
      </button>
    </>
  );
}
