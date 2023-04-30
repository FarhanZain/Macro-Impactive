export default function Navbar() {
  return (
    <>
      <nav class="bg-primary border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <img src="asset/img/logo.png" class="h-12" alt="Impactive Logo" />
          </a>
          <div class="flex md:order-2 items-center">
            <a
              class="text-white text-lg font-medium font-poppins hover:border-b-2 border-secondary"
              href="#"
            >
              Login
            </a>
            <span class="font-extrabold text-secondary mx-3">|</span>
            <a
              class="text-white text-lg font-medium font-poppins hover:border-b-2 border-secondary"
              href="#"
            >
              Buat Akun
            </a>
            {/* <!--  --> */}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center ml-5 p-2 text-sm text-secondary rounded-lg md:hidden hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
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
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-primary rounded-lg bg-primary md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-primary">
              <li>
                <a
                  href="#"
                  class="font-poppins text-lg font-medium block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2"
                  aria-current="page"
                >
                  Aksi Tanggap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-poppins text-lg font-medium block py-2 pl-3 pr-4 text-white rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2"
                >
                  Cari Organisasi
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white text-lg font-poppins rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2 md:border-0 md:p-0 md:w-auto"
                >
                  Jelajahi
                  <svg
                    class="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-primary divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-lg text-white font-poppins font-medium"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Panduan Aksi Tanggap
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-primary-hover"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-primary-hover"
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
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white text-lg font-poppins rounded hover:bg-primary-hover md:hover:bg-primary-hover md:p-2 md:border-0 md:p-0 md:w-auto"
                >
                  Tentang Kami
                  <svg
                    class="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="jelajahi"
                  class="z-10 hidden font-normal bg-primary divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-lg text-white font-poppins font-medium"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Tentang Impactive
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-primary-hover"
                      >
                        Visi dan Misi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-primary-hover"
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
