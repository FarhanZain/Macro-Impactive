export default function InputPwLight(props) {
  return (
    <>
      <div>
        <label
          for={props.inputID}
          class="block mb-2 font-poppins text-base font-semibold text-white"
        >
          {props.labelInput}
        </label>
        <input
          type="password"
          id={props.inputID}
          class="bg-transparent mb-2 border-2 border-white text-white text-base font-Libre font-normal rounded-lg  block w-full p-2.5 placeholder:text-white"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}
