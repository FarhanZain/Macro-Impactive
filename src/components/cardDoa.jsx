export default function CardDoa(props) {
  return (
    <>
      <div className="max-w-[400px] border border-gray-400 px-4 pt-4 rounded-lg shadow-lg h-min">
        <div className="flex mb-3">
          <div className="mr-3">
            <svg
              width="50"
              height="50"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                fill="#67727B"
              />{" "}
              <path
                d="M12 35.6309C12 34.5972 12.772 33.7241 13.7995 33.6103C21.515 32.7559 26.5206 32.8325 34.218 33.6287C35.2324 33.7337 36 34.5918 36 35.6116C36 36.1807 35.7551 36.7275 35.3262 37.1014C26.2414 45.0195 21.0488 44.9103 12.6402 37.1087C12.2306 36.7286 12 36.1897 12 35.6309Z"
                fill="#67727B"
              />{" "}
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M34.1151 34.6234C26.4784 33.8334 21.5449 33.7587 13.9095 34.6042C13.3954 34.6612 13 35.1002 13 35.6309C13 35.9171 13.1187 36.1885 13.3204 36.3757C17.4879 40.2423 20.6461 41.9887 23.7333 41.9999C26.8309 42.0113 30.1592 40.2783 34.6691 36.3476C34.8767 36.1667 35 35.8964 35 35.6116C35 35.0998 34.6154 34.6752 34.1151 34.6234ZM13.6894 32.6164C21.4852 31.7531 26.5628 31.8315 34.3209 32.6341C35.8495 32.7922 37 34.0838 37 35.6116C37 36.465 36.6336 37.2884 35.9832 37.8553C31.4083 41.8426 27.598 44.0141 23.726 43.9999C19.8435 43.9857 16.2011 41.7767 11.9601 37.8418C11.3425 37.2688 11 36.4624 11 35.6309C11 34.0943 12.1487 32.787 13.6894 32.6164Z"
                fill="#67727B"
              />{" "}
              <path
                d="M32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12C28.4183 12 32 15.5817 32 20Z"
                fill="#67727B"
              />{" "}
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26ZM24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z"
                fill="#67727B"
              />{" "}
            </svg>
          </div>
          <div>
            <h3 className="font-Libre text-xl font-semibold">
              {props.teksNama}
            </h3>
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
                {props.teksJam}
              </p>
            </div>
          </div>
        </div>
        {/* ------ */}
        <div className="mb-3">
          <p className="mb-8 text-base font-Libre font-normal">
            {props.teksDoa}
          </p>
          <div className="flex">
            <p className="mr-2 text-base font-Libre font-bold">
              {props.jmlOrang} orang
            </p>
            <p className="text-base font-Libre font-normal">
              mengaminkan doa ini
            </p>
          </div>
        </div>
        {/* ------- */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center px-14 py-3 border-r border-t-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-heart-fill text-gray-500"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />{" "}
            </svg>
            <p className="ml-2">Aamiin</p>
          </div>
          <div className="flex justify-center items-center px-14 py-3 border-l border-t-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-share-fill text-gray-500"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />{" "}
            </svg>
            <p className="ml-2">Bagikan</p>
          </div>
        </div>
      </div>
    </>
  );
}
