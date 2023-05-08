export default function RadioButtonLight(props) {
  return (
    <>
      <div class="flex items-center mb-4">
        <input
          id={props.radioID}
          type="radio"
          value=""
          name={props.nameRadio}
          class="w-5 h-5 text-secondary bg-transparent border-2 border-white  "
        />
        <label
          for={props.radioID}
          class="ml-2 text-base font-semibold font-poppins text-white "
        >
          {props.radioLabel}
        </label>
      </div>
    </>
  );
}
