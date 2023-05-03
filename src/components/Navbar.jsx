import ChevronDown from "./chevronDown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-primary border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"}>
            <a href="#" className="flex items-center">
              <img src={logo} className="h-12" alt="Impactive Logo" />
            </a>
          </Link>
          <div className="flex items-center md:order-2 items-center">
            <Link to={"/Dashboard"}>
              <a className="text-white text-base font-medium font-poppins hover:border-b-2 border-secondary">
                Login
              </a>
            </Link>
            <span className="font-extrabold text-secondary mx-3">|</span>
            <Link to={""}>
              <a className="text-white text-base font-medium font-poppins hover:border-b-2 border-secondary">
                Buat Akun
              </a>
            </Link>
            <a className="text-white ml-2" href="#">
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  fill="#ffffff"
                />{" "}
                <path
                  d="M12 35.6309C12 34.5972 12.772 33.7241 13.7995 33.6103C21.515 32.7559 26.5206 32.8325 34.218 33.6287C35.2324 33.7337 36 34.5918 36 35.6116C36 36.1807 35.7551 36.7275 35.3262 37.1014C26.2414 45.0195 21.0488 44.9103 12.6402 37.1087C12.2306 36.7286 12 36.1897 12 35.6309Z"
                  fill="#ffffff"
                />{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.1151 34.6234C26.4784 33.8334 21.5449 33.7587 13.9095 34.6042C13.3954 34.6612 13 35.1002 13 35.6309C13 35.9171 13.1187 36.1885 13.3204 36.3757C17.4879 40.2423 20.6461 41.9887 23.7333 41.9999C26.8309 42.0113 30.1592 40.2783 34.6691 36.3476C34.8767 36.1667 35 35.8964 35 35.6116C35 35.0998 34.6154 34.6752 34.1151 34.6234ZM13.6894 32.6164C21.4852 31.7531 26.5628 31.8315 34.3209 32.6341C35.8495 32.7922 37 34.0838 37 35.6116C37 36.465 36.6336 37.2884 35.9832 37.8553C31.4083 41.8426 27.598 44.0141 23.726 43.9999C19.8435 43.9857 16.2011 41.7767 11.9601 37.8418C11.3425 37.2688 11 36.4624 11 35.6309C11 34.0943 12.1487 32.787 13.6894 32.6164Z"
                  fill="#ffffff"
                />{" "}
                <path
                  d="M32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12C28.4183 12 32 15.5817 32 20Z"
                  fill="#ffffff"
                />{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26ZM24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z"
                  fill="#ffffff"
                />{" "}
              </svg>
            </a>
            {/* <!--  --> */}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center ml-5 p-2 text-sm text-secondary rounded-lg md:hidden hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- menu list --> */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-primary rounded-lg bg-primary md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-primary">
              <Link to="/AksiTanggap">
                <a
                  className="font-poppins text-base font-medium block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2"
                  aria-current="page"
                >
                  Aksi Tanggap
                </a>
              </Link>
              <li>
                <a
                  href="#"
                  className="font-poppins text-base font-medium block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2"
                >
                  Cari Organisasi
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white text-base font-poppins rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2 md:border-0 md:p-0 md:w-auto"
                >
                  Jelajahi
                  <ChevronDown />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-primary divide-y divide-gray-100 rounded-lg shadow w-max"
                >
                  <ul
                    className="py-2 text-base text-white font-poppins font-medium"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Panduan Aksi Tanggap
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-primary-hover"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Artikel & Berita
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="jelajahi"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white text-base font-poppins rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2 md:border-0 md:p-0 md:w-auto"
                >
                  Tentang Kami
                  <ChevronDown />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="jelajahi"
                  className="z-10 hidden font-normal bg-primary divide-y divide-gray-100 rounded-lg shadow w-max"
                >
                  <ul
                    className="py-2 text-base text-white font-poppins font-medium"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Tentang Impactive
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Visi dan Misi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Kontak
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
