import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="sticky top-0 pt-[64px] w-[270px] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
        aria-label="Sidebar"
      >
        <div class="h-full py-4 overflow-y-auto">
          <ul class="font-semibold font-poppins text-base">
            <Link to={"/Dashboard"}>
              <a class="flex items-center pl-9 py-4 text-gray-500 hover:text-primary-hover hover:border-l-[6px] border-l-primary-hover">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"></path>
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </Link>
            <Link to={"/Dashboard-Profile"}>
              <a class="flex items-center pl-9 py-4 text-gray-500 hover:text-primary-hover hover:border-l-[6px] border-l-primary-hover">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
                </svg>
                <span class="ml-3">Profil User</span>
              </a>
            </Link>
            <Link to={"/Dashboard-Aksi-Tanggap"}>
              <a class="flex items-center pl-9 py-4 text-gray-500 hover:text-primary-hover hover:border-l-[6px] border-l-primary-hover">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V10H22V19C22 20.6569 20.6569 22 19 22ZM18 12V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V12H18ZM6 6H12V12H6V6ZM8 8V10H10V8H8ZM6 13H14V15H6V13ZM6 16H14V18H6V16Z"></path>
                </svg>
                <span class="ml-3">Aksi Tanggap</span>
              </a>
            </Link>
            <Link to={"/Dashboard-Pesan"}>
              <a class="flex items-center pl-9 py-4 text-gray-500 hover:text-primary-hover hover:border-l-[6px] border-l-primary-hover">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.24283 6.85419L11.4895 1.30843C11.8062 1.11848 12.2019 1.11855 12.5185 1.30862L21.7573 6.85416C21.9079 6.94453 22 7.10726 22 7.28286V19.9998C22 20.5521 21.5523 20.9998 21 20.9998H3C2.44772 20.9998 2 20.5521 2 19.9998V7.28298C2 7.10732 2.09218 6.94454 2.24283 6.85419ZM4 8.13244V18.9998H20V8.13197L12.0037 3.33221L4 8.13244ZM12.0597 13.6981L17.3556 9.23515L18.6444 10.7645L12.074 16.3016L5.36401 10.7715L6.63599 9.22813L12.0597 13.6981Z"></path>
                </svg>
                <span class="ml-3">Pesan</span>
              </a>
            </Link>
            <Link to={"Dashboard-Organisasi"}>
              <a class="flex items-center pl-9 py-4 text-gray-500 hover:text-primary-hover hover:border-l-[6px] border-l-primary-hover">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path>
                </svg>
                <span class="ml-3">Organisasi</span>
              </a>
            </Link>
            <Link to={"/Dashboard-Donasi"}>
              <a class="flex items-center pl-9 py-4 text-gray-500 hover:text-primary-hover hover:border-l-[6px] border-l-primary-hover">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.00488 9.00293C5.55717 9.00293 6.00488 9.45064 6.00488 10.0029C7.63965 10.0029 9.14352 10.5633 10.3349 11.5025L12.5049 11.5029C13.8375 11.5029 15.0348 12.0822 15.8588 13.0027L19.0049 13.0029C20.9972 13.0029 22.7173 14.1682 23.521 15.8543C21.1562 18.975 17.3268 21.0029 13.0049 21.0029C10.2142 21.0029 7.85466 20.3997 5.944 19.345C5.80557 19.7285 5.43727 20.0029 5.00488 20.0029H2.00488C1.4526 20.0029 1.00488 19.5552 1.00488 19.0029V10.0029C1.00488 9.45064 1.4526 9.00293 2.00488 9.00293H5.00488ZM6.00589 12.0029L6.00488 17.0249L6.05024 17.0574C7.84406 18.3178 10.183 19.0029 13.0049 19.0029C16.0089 19.0029 18.8035 17.8473 20.84 15.8735L20.9729 15.7399L20.8537 15.6395C20.3897 15.2765 19.8205 15.0513 19.2099 15.0099L19.0049 15.0029L16.8934 15.003C16.9664 15.3246 17.0049 15.6593 17.0049 16.0029V17.0029H8.00488V15.0029L14.7949 15.0019L14.7605 14.9235C14.38 14.1299 13.593 13.5682 12.6693 13.5082L12.5049 13.5029L9.57547 13.5028C8.66823 12.5774 7.40412 12.0032 6.00589 12.0029ZM4.00488 11.0029H3.00488V18.0029H4.00488V11.0029ZM18.0049 5.00293C19.6617 5.00293 21.0049 6.34608 21.0049 8.00293C21.0049 9.65978 19.6617 11.0029 18.0049 11.0029C16.348 11.0029 15.0049 9.65978 15.0049 8.00293C15.0049 6.34608 16.348 5.00293 18.0049 5.00293ZM18.0049 7.00293C17.4526 7.00293 17.0049 7.45064 17.0049 8.00293C17.0049 8.55521 17.4526 9.00293 18.0049 9.00293C18.5572 9.00293 19.0049 8.55521 19.0049 8.00293C19.0049 7.45064 18.5572 7.00293 18.0049 7.00293ZM11.0049 2.00293C12.6617 2.00293 14.0049 3.34608 14.0049 5.00293C14.0049 6.65978 12.6617 8.00293 11.0049 8.00293C9.34803 8.00293 8.00488 6.65978 8.00488 5.00293C8.00488 3.34608 9.34803 2.00293 11.0049 2.00293ZM11.0049 4.00293C10.4526 4.00293 10.0049 4.45064 10.0049 5.00293C10.0049 5.55521 10.4526 6.00293 11.0049 6.00293C11.5572 6.00293 12.0049 5.55521 12.0049 5.00293C12.0049 4.45064 11.5572 4.00293 11.0049 4.00293Z"></path>
                </svg>
                <span class="ml-3">Donasi</span>
              </a>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
}
