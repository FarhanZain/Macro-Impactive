export default function InputSelect(props) {
  return (
    <>
      <label
        for={props.idSelect}
        class="block mb-2 text-base font-poppins font-semibold text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <select
        id={props.idSelect}
        class=" border border-black mb-2 text-black text-base font-Libre font-normal rounded-lg  block w-full p-2.5 "
      >
        <option selected>{props.textDefault}</option>
        <option value={props.teksOpt1}>{props.teksOpt1}</option>
        <option value={props.teksOpt2}>{props.teksOpt2}</option>
        <option value={props.teksOpt3}>{props.teksOpt3}</option>
        <option value={props.teksOpt4}>{props.teksOpt4}</option>
      </select>
    </>
  );
}
