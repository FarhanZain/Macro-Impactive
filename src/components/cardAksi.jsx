import { Link } from "react-router-dom";
import ModalLogin from "./modalLogin";

export default function CardAksi(props) {
  return (
    <>
      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-md ">
        <Link to={props.link}>
          <a href="#">
            <img className="rounded-t-lg w-full" src={props.image} alt="" />
          </a>
        </Link>
        {/* tag */}
        <div className="flex justify-between items-center p-2">
          {props.tag1AksiReg}
          {props.tag2AksiReg}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
          </svg>
        </div>
        {/* content */}
        <div className="px-2">
          <Link to={props.link}>
            <a>
              <h5 className="mb-2 text-2xl font-bold font-Libre tracking-tight text-black">
                {props.judulCard}
              </h5>
            </a>
          </Link>
          <p className="mb-3 font-normal font-Libre text-base text-gray-700 ">
            {props.subCard}
          </p>
        </div>
        {/* time & location */}
        <div>
          <div className="flex items-center px-2 py-1">
            <div className="bg-orange-100 mr-3 p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-calendar-time text-secondary"
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
            </div>
            <p className="font-Libre text-base">{props.teksTanggal}</p>
          </div>
          <div className="flex items-center px-2 pt-1 pb-5">
            <div className="bg-orange-100 mr-3 p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-geo-alt-fill text-secondary"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />{" "}
              </svg>
            </div>
            <p className="font-Libre text-base">{props.teksLokasi}</p>
          </div>
        </div>
      </div>
    </>
  );
}
