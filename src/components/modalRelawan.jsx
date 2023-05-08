import InputTextDark from "./inputTextDark";
import InputPwLight from "./inputPwLight";
import ButtonSecondary from "./buttonSecondary";
import { Link } from "react-router-dom";
import InputDisabledDark from "./inputDisabledDark";
import TextAreaDark from "./textAreaDark";

export default function ModalRelawan(props) {
  return (
    <>
      {/* <!-- Modal toggle --> */}
      {/* <button
        data-modal-target="modalRelawan"
        data-modal-toggle="modalRelawan"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      {/* <!-- Main modal --> */}
      <div
        id="modalRelawan"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-700 bg-opacity-50"
      >
        <div class="relative w-full max-w-4xl max-h-full ">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b-2 rounded-t">
              <h1 class="text-2xl font-semibold font-poppins text-black">
                Daftar Aksi Tanggap
              </h1>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="modalRelawan"
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
              <form action="">
                <div className="flex justify-between">
                  {/* input kiri */}
                  <div className="w-[414px]">
                    <InputDisabledDark
                      labelInput="Kepada"
                      valueInput="Palang Merah Indonesia"
                    />
                    <InputDisabledDark
                      labelInput="Judul Aksi"
                      valueInput="Salurkan Bantuan Untuk Korban Gempa Bumi Cianjur"
                    />
                    <TextAreaDark
                      idArea="dataRelawan"
                      labelArea="Mengapa anda tertarik menjadi relawan di Aksi ini ?"
                      placeholder="Isi Alasan Anda"
                    />
                  </div>
                  {/* input kanan */}
                  <div className="w-[414px]">
                    <TextAreaDark
                      idArea="dataRelawan2"
                      labelArea="Mengapa anda adalah relawan yang tepat untuk Aksi ini ?"
                      placeholder="Isi Alasan Anda"
                    />
                    <InputTextDark
                      inputID="telp"
                      labelInput="No Telp"
                      placeholder="Nomor Telpon"
                    />
                    <InputTextDark
                      inputID="emailRelawan"
                      labelInput="Email"
                      placeholder="Email"
                    />
                    <div className="block">
                      <label
                        htmlFor="ktp"
                        className="mb-2 text-base font-poppins font-semibold"
                      >
                        KTP
                      </label>
                      <input
                        className="block rounded-xl"
                        type="file"
                        name="ktp"
                        id="ktp"
                      />
                    </div>
                  </div>
                </div>
                {/* Button */}
                <Link to={"/Dashboard-Seleksi-Relawan"}>
                  <button
                    type="button"
                    className="text-white w-full justify-center flex items-center mt-4 bg-secondary hover:bg-secondary-hover-hover font-semibold font-poppins rounded-lg text-lg px-5 py-2 "
                  >
                    Daftar Aksi
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
