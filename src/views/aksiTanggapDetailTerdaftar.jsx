import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import hero from "../img/detailAksi.png";
import videoDetail from "../img/videoDetailAksi.png";
import fotoAksi1 from "../img/fotoDetailAksi1.png";
import fotoAksi2 from "../img/fotoDetailAksi2.png";
import fotoAksi3 from "../img/fotoDetailAksi3.png";
import fotoAksi4 from "../img/fotoDetailAksi4.png";
import TagAksiReg from "../components/tagAksiReg";
import ButtonSecondary from "../components/buttonSecondary";
import ButtonPrimary from "../components/buttonPrimary";
import { Link } from "react-router-dom";
import CardDoa from "../components/cardDoa";
import ModalLogin from "../components/modalLogin";
import NavbarLogin from "../components/NavbarLogin";
import ModalDonasi from "../components/modalDonasi";

export default function AksiTanggapDetailTerdaftar() {
  return (
    <>
      <NavbarLogin />

      {/* section */}
      <section className="p-12 bg-gray-200 flex justify-between">
        {/* sisi kiri */}
        <div className="w-[801px]">
          {/* foto detail */}
          <div>
            <img src={hero} alt="gambar detail aksi" />
          </div>

          {/* profil avatar */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-12 h-12 text-gray-400 transition duration-75"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
              </svg>
              <div className="ml-3 font-Libre text-base font-normal">
                <p>Budi Budiman</p>
                <p className="text-secondary">Palang Merah Indonesia</p>
              </div>
            </div>
            {/* --- */}
            <div className="flex items-center">
              <div className="mr-3 font-Libre text-base font-normal">
                <p>20 relawan</p>
              </div>
              <div>
                <div class="flex items-center -space-x-4">
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-12 h-12 text-gray-400 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-12 h-12 text-gray-400 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-12 h-12 text-gray-400 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                  </svg>
                  <a class="flex items-center justify-center w-[42px] h-[42px] text-base font-medium text-black bg-gray-400  rounded-full">
                    +5
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* tombol kontak */}
          <div className="py-4">
            <div className="flex items-center w-max py-1 px-2 border border-gray-500">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5 text-black transition duration-75"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10ZM9 14H15C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14Z"></path>
              </svg>
              <p className="font-Libre text-base font-normal ml-2">Kontak</p>
            </div>
          </div>

          {/* deskripsi aksi */}
          <div className="bg-white p-4 my-4 font-Libre text-base shadow-md">
            <p className="text-justify">
              Palang Merah Indonesia lagi mencari Relawan nih yang ingin
              membantu menyalurkan bantuan ke masyarakat Kabupaten Cianjur yang
              terdampak bencana Gempa Bumi. Mari kita membantu masyarakat yang
              terkena dampak bencana Gempa Bumi.
            </p>
            <p className="mb-10">
              Yuk Gabung bersama kami untuk menjadi relawan kebaikan. Tunggu
              apalagi, yuk gabung sekarang!
            </p>
            <p className="mb-3 font-bold">Detail Aktifitas</p>
            <div className="flex justify-between">
              <p>Metode Briefing</p>
              <p>
                Sebelum melaksanakan kegiatan, ada beberapa alur yang akan di
                laksanakan <br></br> 1. Breafing mengikuti arahan dari pengurus{" "}
                <br /> 2. Sebelum Melaksanakan kegiatan diwajibkan berdoa <br />{" "}
                3. Melaksanakan kegiatan di lokasi
              </p>
            </div>
          </div>

          {/* --- */}
          <p className="font-Libre text-base font-bold py-1">Pekerjaan</p>
          {/* --- */}

          {/* Accordion pekerjaan */}
          <div className="bg-white shadow-md">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white text-black p-4 my-4"
              data-inactive-classes="bg-white text-black p-4 my-4"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 px-4 font-medium text-left text-black bg-white"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span>Relawan Gempa Bumi</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                class="hidden font-Libre text-base font-normal"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="flex p-4">
                  <p className="w-56">Nama Pekerjaan</p>
                  <p>Relawan Gempa Bumi</p>
                </div>
                <div className="flex p-4">
                  <p className="w-56">Relawan yang dibutuhkan</p>
                  <p>100 orang</p>
                </div>
                <div className="flex p-4">
                  <p className="w-56">Total jam kerja</p>
                  <p>8 jam</p>
                </div>
                <div className="flex p-4">
                  <p className="w-56">Tugas Relawan</p>
                  <p>
                    Menyalurkan Bantuan ke para korban terdampak bencana gempa{" "}
                    <br />
                    bumi cianjur -Membantu Menyiapkan konsumsi makanan dan{" "}
                    <br /> minuman untuk para korban <br />
                    -Membantu menyiapkan pakaian dan <br /> tempat tinggal
                    sementara yang layak untuk para korban <br />
                    -Membantu mengobati para korban yang sakit dan terluka
                  </p>
                </div>
                <div className="flex p-4">
                  <p className="w-56">Kriteria Relawan</p>
                  <p>
                    -Berusia 15-45 tahun <br />
                    -Berdomisili di Jabodetabek, Jawa Barat, dan sekitarnya{" "}
                    <br />
                    -Sehat jasmani & rohani <br />
                    -Memiliki Jiwa kerelawanan <br />
                    -Mampu bekerja secara mandiri dan dapat bekerjasama dengan
                    tim
                  </p>
                </div>
                <div className="flex p-4">
                  <p className="w-56">Perlengkapan Relawan</p>
                  <p>
                    Tidak memerlukan kelengkapan, semua alat pendukung kegiatan{" "}
                    <br /> sudah kami sediakan.
                  </p>
                </div>
                <div className="flex p-4">
                  <p className="w-56">Domisili</p>
                  <p>Kabupaten Cianjur, Jawa Barat</p>
                </div>
                <div className="flex p-4">
                  <p className="w-56">Informasi Tambahan</p>
                  <p>
                    Untuk relawan yang berdomisili di Jabodetabek, Jawa Barat,
                    dan <br /> sekitarnya akan kami biayai ongkos
                    transportasinya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- */}
          <p className="font-bold font-Libre text-base py-4">
            Relawan (20 Orang)
          </p>
          {/* --- */}

          {/* jumlah relawan */}
          <div className="p-4">
            <div className="flex justify-between mb-6 font-Libre font-normal text-base">
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-14 h-14 text-gray-400 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                </svg>
                <p>Tiara</p>
              </div>
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-14 h-14 text-gray-400 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                </svg>
                <p>Farel</p>
              </div>
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-14 h-14 text-gray-400 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                </svg>
                <p>Nadya</p>
              </div>
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-14 h-14 text-gray-400 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                </svg>
                <p>Bagas</p>
              </div>
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-14 h-14 text-gray-400 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                </svg>
                <p>Bagus</p>
              </div>
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-14 h-14 text-gray-400 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                </svg>
                <p>Dinda</p>
              </div>
            </div>
            <p className="text-center font-Libre font-normal text-base text-secondary">
              Tampilkan Lebih Banyak
            </p>
          </div>

          {/* video detail */}
          <div className="py-4">
            <p className="font-bold font-Libre text-base mb-5">Video</p>
            <img src={videoDetail} alt="video aksi" />
          </div>

          {/* galeri aksi */}
          <div className="py-4">
            <p className="font-bold font-Libre text-base mb-5">Galeri</p>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <img src={fotoAksi1} alt="foto aksi 1" />
                <img src={fotoAksi2} alt="foto aksi 2" />
                <img src={fotoAksi3} alt="foto aksi 3" />
                <img src={fotoAksi4} alt="foto aksi 4" />
              </div>
            </div>
          </div>
        </div>

        {/* sisi kanan */}
        <div className="w-[420px]">
          {/* card 1 */}
          <div className="bg-white p-4 shadow-md">
            {/* judul */}
            <h1 className="font-poppins text-2xl font-semibold">
              Salurkan Bantuan Untuk Korban Gempa Bumi Cianjur
            </h1>
            {/* tags */}
            <div className="flex justify-between mt-5">
              <TagAksiReg teksTag="Reguler" />
              <TagAksiReg teksTag="Sosial Masyarakat" />
              <TagAksiReg teksTag="Penyaluran Donasi" />
            </div>
            {/* info */}
            <div className="py-4">
              <div className="flex items-center py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-calendar-time text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                  <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />{" "}
                  <circle cx="18" cy="18" r="4" /> <path d="M15 3v4" />{" "}
                  <path d="M7 3v4" /> <path d="M3 11h16" />{" "}
                  <path d="M18 16.496v1.504l1 1" />{" "}
                </svg>
                <p className="ml-3 font-Libre text-base font-normal">Reguler</p>
              </div>
              <div className="flex py-2">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-black transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM15.5355 7.05025L16.9497 8.46447L12 13.4142L10.5858 12L15.5355 7.05025Z"></path>
                </svg>
                <div className="ml-3 font-Libre text-base font-normal">
                  <p>Jadwal Kegiatan</p>
                  <p>10 Maret 2023</p>
                  <p className="text-secondary">
                    ( Tambahkan ke kalender google )
                  </p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-black transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
                <p className="ml-3 font-Libre text-base font-normal">
                  Kabupaten Cianjur, Jawa Barat
                </p>
              </div>
              <div className="flex items-center py-2">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-black transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
                </svg>
                <p className="ml-3 font-Libre text-base font-normal text-secondary">
                  Batas Pendaftaran : 7 Maret 2023
                </p>
              </div>
            </div>
            {/* button */}
            <div>
              {/* button relawan */}
              <div className="py-2">
                <Link to={""}>
                  <button
                    type="button"
                    className="text-gray-500 w-full justify-center flex items-center gap-3 bg-gray-200 font-semibold font-poppins rounded-lg text-lg px-5 py-3 cursor-not-allowed"
                  >
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
                    </svg>
                    Anda Sudah Mendaftar
                  </button>
                </Link>
              </div>
              {/* button donasi */}
              <div className="py-2">
                <Link to={""}>
                  <button
                    data-modal-target="modalDonasi"
                    data-modal-toggle="modalDonasi"
                    type="button"
                    className="text-white w-full justify-center flex items-center gap-3 bg-primary hover:bg-primary-hover font-semibold font-poppins rounded-lg text-lg px-5 py-3 "
                  >
                    <svg
                      aria-hidden="true"
                      class="flex-shrink-0 w-5 h-5 text-white transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.00488 9.00293C5.55717 9.00293 6.00488 9.45064 6.00488 10.0029C7.63965 10.0029 9.14352 10.5633 10.3349 11.5025L12.5049 11.5029C13.8375 11.5029 15.0348 12.0822 15.8588 13.0027L19.0049 13.0029C20.9972 13.0029 22.7173 14.1682 23.521 15.8543C21.1562 18.975 17.3268 21.0029 13.0049 21.0029C10.2142 21.0029 7.85466 20.3997 5.944 19.345C5.80557 19.7285 5.43727 20.0029 5.00488 20.0029H2.00488C1.4526 20.0029 1.00488 19.5552 1.00488 19.0029V10.0029C1.00488 9.45064 1.4526 9.00293 2.00488 9.00293H5.00488ZM6.00589 12.0029L6.00488 17.0249L6.05024 17.0574C7.84406 18.3178 10.183 19.0029 13.0049 19.0029C16.0089 19.0029 18.8035 17.8473 20.84 15.8735L20.9729 15.7399L20.8537 15.6395C20.3897 15.2765 19.8205 15.0513 19.2099 15.0099L19.0049 15.0029L16.8934 15.003C16.9664 15.3246 17.0049 15.6593 17.0049 16.0029V17.0029H8.00488V15.0029L14.7949 15.0019L14.7605 14.9235C14.38 14.1299 13.593 13.5682 12.6693 13.5082L12.5049 13.5029L9.57547 13.5028C8.66823 12.5774 7.40412 12.0032 6.00589 12.0029ZM4.00488 11.0029H3.00488V18.0029H4.00488V11.0029ZM18.0049 5.00293C19.6617 5.00293 21.0049 6.34608 21.0049 8.00293C21.0049 9.65978 19.6617 11.0029 18.0049 11.0029C16.348 11.0029 15.0049 9.65978 15.0049 8.00293C15.0049 6.34608 16.348 5.00293 18.0049 5.00293ZM18.0049 7.00293C17.4526 7.00293 17.0049 7.45064 17.0049 8.00293C17.0049 8.55521 17.4526 9.00293 18.0049 9.00293C18.5572 9.00293 19.0049 8.55521 19.0049 8.00293C19.0049 7.45064 18.5572 7.00293 18.0049 7.00293ZM11.0049 2.00293C12.6617 2.00293 14.0049 3.34608 14.0049 5.00293C14.0049 6.65978 12.6617 8.00293 11.0049 8.00293C9.34803 8.00293 8.00488 6.65978 8.00488 5.00293C8.00488 3.34608 9.34803 2.00293 11.0049 2.00293ZM11.0049 4.00293C10.4526 4.00293 10.0049 4.45064 10.0049 5.00293C10.0049 5.55521 10.4526 6.00293 11.0049 6.00293C11.5572 6.00293 12.0049 5.55521 12.0049 5.00293C12.0049 4.45064 11.5572 4.00293 11.0049 4.00293Z"></path>
                    </svg>
                    Donasi
                  </button>
                  <ModalDonasi />
                </Link>
              </div>
              <div className="flex justify-between py-2">
                {/* button facebook */}
                <div>
                  <Link to={""}>
                    <button
                      type="button"
                      className="text-white justify-center flex items-center gap-3 bg-blue-700 hover:bg-blue-800 font-semibold font-poppins rounded-lg text-lg px-11 py-3 "
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-8 h-8 text-white transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
                {/* button twitter */}
                <div>
                  <Link to={""}>
                    <button
                      type="button"
                      className="text-white justify-center flex items-center gap-3 bg-cyan-400 hover:bg-cyan-500 font-semibold font-poppins rounded-lg text-lg px-11 py-3 "
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-8 h-8 text-white transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
                {/* button whatsapp */}
                <div>
                  <Link to={""}>
                    <button
                      type="button"
                      className="text-white justify-center flex items-center gap-3 bg-green-400 hover:bg-green-500 font-semibold font-poppins rounded-lg text-lg px-11 py-3 "
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-8 h-8 text-white transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white p-4 shadow-md mt-5">
            {/* judul */}
            <h1 className="font-poppins text-2xl font-semibold text-center">
              Doa dan Dukungan
            </h1>
            {/* card doa */}
            <div className="py-4">
              <div className="py-2">
                <CardDoa
                  teksNama="Orang Baik"
                  teksJam="1h - Salurkan Bantuan unt..."
                  teksDoa="Semoga seluruh masyarakat Kabupaten Cianjur yang terdampak bencana diberi ketabahan, kekuatan dan segera pulih dari musibah yang menghampiri. Aamiin"
                  jmlOrang={5}
                />
              </div>
              <div className="py-2">
                <CardDoa
                  teksNama="Warga Cianjur"
                  teksJam="2h - Salurkan Bantuan unt..."
                  teksDoa="Doakan kami masyarakat Kabupaten Cianjur semoga semakin banyak korban yang diberi pertolongan dan diberi bantuan yang layak akibat gempa yang melanda. Aamiin"
                  jmlOrang={21}
                />
              </div>
            </div>
            {/* button */}
            <div className="flex justify-center py-2">
              <ButtonSecondary TextButton="Berikan Doa" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
