export default function CardArtikelLandingPage(props) {
  return (
    <>
      <div className="flex items-center p-3 border border-gray-400 w-full">
        <div className="w-[400px]">
          <a href="#">
            <img src={props.image} alt="" className="" />
          </a>
        </div>
        <div className="ml-5 w-[730px]">
          <div className="flex items-center">
            <a href="" className="font-Libre font-bold text-2xl">
              {props.teksArtikel}
            </a>
            <p className="text-2xl px-2 font-Libre">-</p>
            <h1 className="font-Libre font-normal text-2xl">
              {props.teksHashtag}
            </h1>
          </div>
          <p className="font-normal text-base font-Libre py-3">
            {props.isiArtikel}
          </p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clock text-gray-400"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />{" "}
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />{" "}
            </svg>
            <p className="ml-1 font-Libre text-base text-gray-400">
              {props.authorArtikel}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
