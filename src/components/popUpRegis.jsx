import { Link } from "react-router-dom";
import ButtonSecondary from "./buttonSecondary";

export default function PopUpRegis() {
  return (
    <>
      {/* <button
        data-modal-target="popup-regis"
        data-modal-toggle="popup-regis"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      <div
        id="popup-regis"
        tabindex="-1"
        className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-700 bg-opacity-50"
      >
        <div className="relative w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow py-4">
            {/* close button */}
            <Link>
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-hide="popup-regis"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </Link>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                className="text-primary"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.45 10.63L15.31 25.76L7.55 18a1.4 1.4 0 0 1 2-2l5.78 5.78l11.14-11.13a1.4 1.4 0 1 1 2 2Z"
                  class="clr-i-solid clr-i-solid-path-1"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
            </div>
            <div className="p-4 text-center">
              <p className="text-xl font-medium font-poppins text-black ">
                Akun anda berhasil didaftarkan
              </p>
            </div>
            <div className="flex justify-center my-4">
              <ButtonSecondary TextButton="Oke" link="/Landing-Page-Login" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
