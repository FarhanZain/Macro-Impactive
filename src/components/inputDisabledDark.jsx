export default function InputDisabledDark(props) {
  return (
    <>
      <div>
        <label class="block mb-2 font-poppins text-base font-semibold text-black">
          {props.labelInput}
        </label>
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          class="mb-3 bg-gray-100 border border-black text-black text-base font-Libre rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
          value={props.valueInput}
          disabled
        ></input>
      </div>
    </>
  );
}
