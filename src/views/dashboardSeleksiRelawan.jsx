import Navbar from "../components/Navbar";
import NavbarLogin from "../components/NavbarLogin";
import ButtonSecondary from "../components/buttonSecondary";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import imgAksi from "../img/cardAksi1.png";
import { Link } from "react-router-dom";

export default function DasboardSeleksiRelawan() {
  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarLogin />
      </div>
      <section>
        {/* Content Dasboard*/}

        <div className="flex">
          <Sidebar />
          <div class="w-full pt-24 px-7 bg-gray-200">
            <h1 className="font-poppins font-semibold text-3xl ">Dashboard</h1>
            {/* Baris 1 */}
            <div className="flex justify-between items-center my-5">
              {/* card seleksi */}
              <div className="bg-white w-[740px] shadow-md h-[376px]">
                <h1 className="p-4 text-2xl font-poppins font-semibold border-gray-400 border-b-2">
                  Proses Seleksi Relawan
                </h1>
                <div className="flex px-4 py-2 justify-between items-center border-gray-400 border-b-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 font-bold font-Libre text-base">
                      |
                    </span>
                    <p className="px-4 font-Libre text-base font-semibold">
                      Aksi Tanggap (0)
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="pr-7 font-Libre text-base font-semibold">
                      Status
                    </p>
                    <span className="text-gray-400 font-bold font-Libre text-base">
                      |
                    </span>
                  </div>
                </div>
                <div className="h-[250px] flex items-center">
                  <div className="flex">
                    <Link>
                      <div className="pl-4 w-full h-full flex items-center border-r-2 border-gray-500 cursor-pointer">
                        <div className="w-full mr-3">
                          <img src={imgAksi} alt="" />
                        </div>
                        <div>
                          <h1 className="font-poppins text-xl font-bold">
                            Salurkan Bantuan Untuk Korban Gempa Bumi Cianjur
                          </h1>
                          <div className="flex items-center py-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-clock text-gray-400"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />{" "}
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />{" "}
                            </svg>
                            <p className="ml-1 font-Libre text-base text-gray-400">
                              10 Maret 2023
                            </p>
                          </div>
                          <div className="flex items-center py-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-geo-alt-fill text-gray-400"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />{" "}
                            </svg>
                            <p className="ml-1 font-Libre text-base text-gray-400">
                              Kabupaten Cianjur, Jawa Barat
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="flex justify-center items-center mx-4">
                      <p className="px-4 py-2 border-2 rounded-lg border-secondary text-secondary font-Libre font-normal text-base">
                        Diverifikasi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card rangkuman */}
              <div className="bg-white w-[300px] h-[376px] shadow-md">
                <h1 className="p-4 text-2xl font-poppins font-semibold border-gray-400 border-b-2">
                  Rangkuman
                </h1>
                <div className="flex px-4 py-2 mb-5 items-center">
                  <div className="mr-3">
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-14 h-14 text-gray-400 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-Libre text-base font-semibold">
                      Raihan Caesar Ridho
                    </p>
                    <p className="font-libre text-base font-normal text-secondary">
                      Lihat Profil
                    </p>
                  </div>
                </div>
                <div className="flex px-4 py-2">
                  <div className="mr-3">
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V10H22V19C22 20.6569 20.6569 22 19 22ZM18 12V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V12H18ZM6 6H12V12H6V6ZM8 8V10H10V8H8ZM6 13H14V15H6V13ZM6 16H14V18H6V16Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins text-base font-semibold text-gray-500">
                      0
                    </p>
                    <p className="font-libre text-base font-normal text-gray-400">
                      Aksi Tanggap Diikuti
                    </p>
                  </div>
                </div>
                <div className="flex px-4 py-2">
                  <div className="mr-3">
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins text-base font-semibold text-gray-500">
                      0
                    </p>
                    <p className="font-libre text-base font-normal text-gray-400">
                      Organisasi Tanggap Diikuti
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Baris 2 */}
            <div className="flex justify-between items-center my-5">
              {/* Pesan Masuk */}
              <div className="bg-white w-[520px] h-[376px] shadow-md">
                <div className="flex p-4 justify-between items-center border-gray-400 border-b-2">
                  <h1 className="text-2xl font-poppins font-semibold ">
                    Pesan Masuk
                  </h1>
                  <p className="px-2 py-1 font-Libre font-normal text-base border-2 border-gray-500">
                    Lihat Semua
                  </p>
                </div>
                <div className="text-base mt-24 text-center text-gray-500 font-libre font-semibold">
                  <p className="mb-4">Belum ada pesan masuk dari organisasi.</p>
                  <p>Nantinya, pesan dari organisasi akan masuk ke sini.</p>
                </div>
              </div>
              {/* Donasi */}
              <div className="bg-white w-[520px] h-[376px] shadow-md">
                <div className="flex p-4 justify-between items-center border-gray-400 border-b-2">
                  <h1 className="text-2xl font-poppins font-semibold ">
                    Donasi
                  </h1>
                  <p className="px-2 py-1 font-Libre font-normal text-base border-2 border-gray-500">
                    Lihat Semua
                  </p>
                </div>
                <div className="text-base mt-24 text-center text-gray-500 font-libre font-semibold">
                  <p className="mb-4">
                    Belum ada aktivitas donasi aksi tanggap.
                  </p>
                  <p>Nantinya, seluruh riwayat donasi akan masuk ke sini.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
