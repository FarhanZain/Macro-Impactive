export default function TextAreaDark(props) {
  return (
    <>
      <div>
        <label
          for={props.idArea}
          class="block mb-2 text-base font-semibold text-black"
        >
          {props.labelArea}
        </label>
        <textarea
          id={props.idArea}
          rows="4"
          class="block p-2.5 w-full mb-2 text-base text-black rounded-lg border border-black placeholder:text-black"
          placeholder={props.placeholder}
        ></textarea>
      </div>
    </>
  );
}
