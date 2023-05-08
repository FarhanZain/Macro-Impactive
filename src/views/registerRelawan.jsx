import ButtonSecondary from "../components/buttonSecondary";
import InputPwLight from "../components/inputPwLight";
import InputTextLight from "../components/inputTextLight";
import { Link } from "react-router-dom";
import ilustrasi from "../img/ilus-login.png";
import RadioButtonLight from "../components/radioButtonLight";

export default function RegisterRelawan() {
  return (
    <>
      <section>
        <div className="flex justify-center my-10">
          {/* form kiri */}
          <div className="bg-primary px-10 py-6 rounded-l-3xl w-[512px]">
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="text-white cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.828 7l2.536 2.535L6.95 10.95L2 6l4.95-4.95l1.414 1.415L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H5.828Z"
                />
              </svg>
            </Link>
            <h1 className="text-3xl font-poppins font-semibold text-white mt-4">
              Daftar Akun Relawan
            </h1>
            <p className="text-base font-Libre font-normal text-white my-4">
              Buat akun anda dan jadilah relawan
            </p>
            <form action="">
              <InputTextLight
                inputID="namaRegis"
                labelInput="Nama"
                placeholder="Masukkan Nama"
              />
              <div className="mt-4">
                <p className="text-base font-poppins font-semibold text-white mb-2">
                  Jenis Kelamin
                </p>
                <div className="flex gap-3">
                  <RadioButtonLight
                    radioID="laki"
                    radioLabel="Laki-laki"
                    nameRadio="kelamin"
                  />
                  <RadioButtonLight
                    radioID="cewe"
                    radioLabel="Perempuan"
                    nameRadio="kelamin"
                  />
                </div>
              </div>
              <InputTextLight
                inputID="profesiRegis"
                labelInput="Profesi"
                placeholder="Masukkan Profesi"
              />
              <InputTextLight
                inputID="provinsiRegis"
                labelInput="Provinsi Domisili"
                placeholder="Masukkan Provinsi"
              />
              <InputTextLight
                inputID="kotaRegis"
                labelInput="Kota Domisili"
                placeholder="Masukkan Kota"
              />
              <InputTextLight
                inputID="emailRegis"
                labelInput="Email"
                placeholder="Masukkan Email"
              />
              <InputPwLight
                inputID="sandi1Regis"
                labelInput="Kata Sandi"
                placeholder="Masukkan Kata Sandi"
              />
              <InputPwLight
                inputID="sandi2Regis"
                labelInput="Konfirmasi Kata Sandi"
                placeholder="Masukkan Ulang Kata Sandi"
              />
              <div className="flex justify-center mt-6">
                {/* <ButtonSecondary TextButton="Daftar" modalID="popup-regis" /> */}
              </div>
            </form>
            <div className="flex justify-center my-4">
              <p className="text-base font-normal font-Libre text-white">
                Sudah Punya Akun ?
              </p>
              <Link
                to="#"
                className="ml-2 text-base font-normal font-Libre text-white"
              >
                <u>Masuk disini</u>
              </Link>
            </div>
            <p className="text-base text-center font-normal font-Libre text-white my-4">
              Atau Daftar dengan
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
          {/* ilustrasi kanan */}
          <div className="w-[512px] flex justify-center items-center border-8 border-primary rounded-r-3xl">
            <img src={ilustrasi} alt="ilustrasi" srcset="" />
          </div>
        </div>
      </section>
    </>
  );
}
