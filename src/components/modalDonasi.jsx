import InputTextDark from "./inputTextDark";
import InputPwLight from "./inputPwLight";
import ButtonSecondary from "./buttonSecondary";
import { Link } from "react-router-dom";
import InputDisabledDark from "./inputDisabledDark";
import TextAreaDark from "./textAreaDark";
import InputSelect from "./inputSelect";
import PopUpSubmit from "./popUpSubmitDonasi";

export default function ModalDonasi(props) {
  return (
    <>
      {/* <!-- Modal toggle --> */}
      {/* <button
        data-modal-target="modalDonasi"
        data-modal-toggle="modalDonasi"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      {/* <!-- Main modal --> */}
      <div
        id="modalDonasi"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-700 bg-opacity-50"
      >
        <div class="relative w-full max-w-4xl max-h-full ">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between px-6 py-4 border-b-2 rounded-t">
              <h1 class="text-2xl font-semibold font-poppins text-black">
                Transaksi Donasi
              </h1>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="modalDonasi"
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
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 ">
              <div className="flex justify-between">
                {/* form kiri */}
                <form className="w-[414px]" action="">
                  <InputTextDark
                    placeholder="Masukkan Nama"
                    inputID="namaDonasi"
                    labelInput="Nama"
                  />
                  <InputTextDark
                    placeholder="Masukkan Alamat"
                    inputID="alamatDonasi"
                    labelInput="Alamat"
                  />
                  <InputSelect
                    idSelect="jenisDonasi"
                    label="Jenis"
                    textDefault="Sandang"
                    teksOpt1="Pangan"
                    teksOpt2="DLL"
                  />
                  <InputTextDark
                    placeholder="Berat Barang"
                    inputID="beratBarang"
                    labelInput="Berat"
                  />
                  <InputSelect
                    idSelect="opsiKirim"
                    label="Opsi"
                    textDefault="Drop Off"
                    teksOpt1="Pick Up"
                  />
                </form>
                {/* form kanan */}
                <form className="w-[414px]" action="">
                  <h2 className="text-2xl font-poppins font-semibold mb-2">
                    List Barang
                  </h2>
                  <InputTextDark
                    inputID="listBarang"
                    labelInput="Masukkan Barang yang ingin didonasikan"
                    placeholder="List Barang"
                  />
                  <div className="flex justify-end py-2">
                    <ButtonSecondary TextButton="Masukkan" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <p className="text-base font-Libre font-bold">1. Tikar</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="text-red-700"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94l-1.97-1.97Z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0Z"
                          clipRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <p className="text-base font-Libre font-bold">2. Pakaian</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="text-red-700"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94l-1.97-1.97Z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0Z"
                          clipRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>
                </form>
              </div>
              {/* Button */}
              <Link>
                <button
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-white w-full justify-center flex items-center mt-4 bg-secondary hover:bg-secondary-hover-hover font-semibold font-poppins rounded-lg text-lg px-5 py-2 "
                >
                  Submit
                </button>
                <PopUpSubmit />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
