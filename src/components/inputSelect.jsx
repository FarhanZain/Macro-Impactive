export default function InputSelect(props) {
  return (
    <>
      <label
        for="countries"
        class="block mb-2 text-base font-poppins font-semibold text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <select
        id="countries"
        class=" border border-gray-300 text-gray-900 text-base font-Libre font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>{props.textDefault}</option>
        <option value={props.textOpt1}>{props.teksOpt1}</option>
        <option value={props.textOpt2}>{props.teksOpt2}</option>
        <option value={props.textOpt3}>{props.teksOpt3}</option>
        <option value={props.textOpt4}>{props.teksOpt4}</option>
      </select>
    </>
  );
}
