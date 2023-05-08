import { Link } from "react-router-dom";

export default function PopUpSubmit() {
  return (
    <>
      {/* <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      <div
        id="popup-modal"
        tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-700 bg-opacity-50"
      >
        <div class="relative w-full max-w-3xl max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            {/* close button */}
            <Link to="/Dashboard-Donasi">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center "
                //   data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
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
                <span class="sr-only">Close modal</span>
              </button>
            </Link>
            <div class="p-8 text-center">
              <p class="text-xl font-medium font-poppins text-black ">
                Terimakasih telah mendonasikan hartamu untuk mereka yang
                membutuhkan. Kami akan segera memproses donasimu
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
