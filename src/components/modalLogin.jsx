import InputTextLight from "./inputTextLight";
import InputPwLight from "./inputPwLight";
import ButtonSecondary from "./buttonSecondary";
import { Link } from "react-router-dom";
import ilustrasi from "../img/ilus-login.png";

export default function ModalLogin(props) {
  return (
    <>
      {/* <!-- Modal toggle --> */}
      {/* <button
        data-modal-target={props.idModal}
        data-modal-toggle={props.idModal}
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      {/* <!-- Main modal --> */}
      <div
        id="modalLogin"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-700 bg-opacity-50 transition duration-1000 ease-in-out"
      >
        <div class="flex justify-center w-full max-w-3xl max-h-full ">
          {/* ilsutrasi */}
          <div className="p-6 bg-white border-8 border-primary rounded-l-3xl">
            <div className="flex justify-center items-center w-[350px]">
              <img src={ilustrasi} alt="" />
            </div>
          </div>
          {/* <!-- Modal content --> */}
          <div class="relative bg-primary rounded-r-3xl shadow">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-50 hover:text-secondary rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="modalLogin"
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
            <div class="px-4 py-10 lg:px-6 w-[400px]">
              <h1 className="font-poppins text-3xl font-semibold text-white">
                Masuk
              </h1>
              <p className="text-base font-Libre font-normal my-4 text-white">
                Masuk ke Akun Anda
              </p>
              <form class="space-y-5" action="#">
                <InputTextLight
                  inputID="email"
                  labelInput="Email"
                  placeholder="Masukkan Email"
                />
                <InputPwLight
                  inputID="sandi"
                  labelInput="Kata Sandi"
                  placeholder="Masukkan Kata Sandi"
                />
                <div className="flex justify-center">
                  <ButtonSecondary TextButton="Masuk" link="/Dashboard" />
                </div>
              </form>
              <div className="flex justify-center items-center">
                <p className="text-base font-Libre font-normal my-2 text-white">
                  Belum Punya Akun ?
                </p>
                <Link to="/Registrasi-Relawan">
                  <a className="ml-1 text-base font-Libre font-normal my-2 text-white">
                    <u>Daftar disini</u>
                  </a>
                </Link>
              </div>
              <p className="text-center text-base font-Libre font-normal my-2 text-white">
                Atau masuk dengan
              </p>
              <div className="flex justify-center py-2 gap-4">
                {/* button facebook */}
                <div className="flex items-center">
                  <Link to={""}>
                    <button
                      type="button"
                      className="text-white justify-center flex items-center gap-3 bg-blue-700 hover:bg-blue-800 font-semibold font-poppins rounded-lg text-lg px-4 py-3 "
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                      </svg>
                      <p className="font-poppins text-base font-semibold text-white">
                        Facebook
                      </p>
                    </button>
                  </Link>
                </div>
                {/* button google */}
                <div className="flex items-center">
                  <Link to={""}>
                    <button
                      type="button"
                      className="text-white justify-center flex items-center gap-3 bg-gray-50 hover:bg-gray-200 font-semibold font-poppins rounded-lg text-lg px-4 py-3 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 256 262"
                      >
                        <path
                          fill="#4285F4"
                          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        />
                        <path
                          fill="#34A853"
                          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        />
                        <path
                          fill="#FBBC05"
                          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        />
                        <path
                          fill="#EB4335"
                          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        />
                      </svg>
                      <p className="font-poppins text-base font-semibold text-black">
                        Google
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
