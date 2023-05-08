export default function TextAreaLight(props) {
  return (
    <>
      <div>
        <label
          for={props.idArea}
          class="block mb-2 text-base font-semibold font-poppins text-white"
        >
          {props.labelArea}
        </label>
        <textarea
          id={props.idArea}
          rows="4"
          class="block p-2.5 w-full mb-2 text-base text-white rounded-lg border border-white placeholder:text-white"
          placeholder={props.placeholder}
        ></textarea>
      </div>
    </>
  );
}
