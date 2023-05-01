export default function ButtonPrimary(props) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-primary hover:bg-primary-hover font-semibold font-poppins rounded-lg text-lg px-5 py-3 "
      >
        {props.TextButton}
      </button>
    </>
  );
}
