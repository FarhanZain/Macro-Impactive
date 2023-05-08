export default function InputTextDark(props) {
  return (
    <>
      <div>
        <label
          for={props.inputID}
          class="block mb-2 font-poppins text-base font-semibold text-black"
        >
          {props.labelInput}
        </label>
        <input
          type="text"
          id={props.inputID}
          class="bg-transparent mb-2 border border-black text-black text-base font-Libre font-normal rounded-lg  block w-full p-2.5 "
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}
