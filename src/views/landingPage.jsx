import Navbar from "../components/Navbar";
import ButtonSecondary from "../components/buttonSecondary";
import relawanCard from "../img/relawan-card.png";
import organisasiCard from "../img/organisasi-card.png";
import aksiCard from "../img/aksi-card.png";
import CardAksi from "../components/cardAksi";
import TagAksiReg from "../components/tagAksiReg";
import TagAksiEkstensi from "../components/tagAksiEkstensi";
import cardAksi1 from "../img/cardAksi1.png";
import cardAksi2 from "../img/cardAksi2.png";
import cardAksi3 from "../img/cardAksi3.png";
import ButtonPrimary from "../components/buttonPrimary";
import CardDoa from "../components/cardDoa";
import CardArtikelLandingPage from "../components/cardArtikelLandingPage";
import Artikel1 from "../img/Artikel1.png";
import Artikel2 from "../img/Artikel2.png";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-cover bg-no-repeat bg-[url('./img/bg-img.png')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl h-screen">
          <h1 className="mb-4 pt-24 text-4xl font-bold font-poppins tracking-tight lg:leading-20 text-white md:text-5xl lg:text-6xl">
            Ambil Peranmu untuk <br /> Gerakan Sosial Kemanusiaan
          </h1>
          <p className="mb-10 text-2xl font-medium font-Libre lg:leading-14 text-white lg:text-4xl">
            Partisipasi masyarakat menjadi kunci dalam aksi <br /> tanggap
            bencana alam
          </p>
          <ButtonSecondary TextButton="Bergabung Sekarang" />
        </div>
      </section>

      {/* card relawan */}
      <section className="relative">
        <div className="absolute w-3/4 -translate-y-1/2 translate-x-1/2 right-1/2 drop-shadow rounded-xl bg-white p-6">
          <div className="flex flex-col justify-center lg:flex lg:flex-row lg:justify-between items-center">
            <div className="flex items-center">
              <img src={relawanCard} alt="relawan logo" />
              <div className="text-center ml-3">
                <h3 className="font-poppins font-semibold text-2xl lg:text-3xl">
                  2.2k
                </h3>
                <p className="font-poppins font-normal text-xl lg:text-2xl">
                  Relawan
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={organisasiCard} alt="organisasi logo" />
              <div className="text-center ml-3">
                <h3 className="font-poppins font-semibold text-2xl lg:text-3xl">
                  24
                </h3>
                <p className="font-poppins font-normal text-xl lg:text-2xl">
                  Organisasi
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={aksiCard} alt="Aksi logo" />
              <div className="text-center ml-3">
                <h3 className="font-poppins font-semibold text-2xl lg:text-3xl">
                  122
                </h3>
                <p className="font-poppins font-normal text-xl lg:text-2xl">
                  Aksi Tanggap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* card aksi */}
      <section class="py-36">
        <div class="flex mx-auto px-4 max-w-screen-xl">
          {/* <!-- card info --> */}
          <div class="mr-6">
            <div class="max-w-md h-full p-6 bg-primary border border-gray-200 rounded shadow">
              <a href="#">
                <h5 class="mb-8 text-3xl font-semibold font-poppins tracking-tight text-white">
                  Jadi Relawan untuk Perubahan Besar
                </h5>
              </a>
              <p class="mb-10 font-normal text-base font-Libre text-justify text-white">
                Lebih banyak relawan, lebih besar dampaknya. Salurkan bantuan
                dan dukungan Anda, bersama tingkatkan kebutuhan sosial
                masyarakat yang berubah dengan cepat karena dampak dari bencana
                alam.
              </p>
              <div class="flex justify-center">
                <a
                  href="#"
                  class="inline-flex items-center px-6 py-3 text-lg font-semibold font-poppins text-center text-white bg-secondary rounded-lg hover:bg-secondary-hover"
                >
                  Jadi Relawan
                </a>
              </div>
            </div>
          </div>

          {/* <!-- carousel-card --> */}
          <div id="controls-carousel" class="relative w-full">
            {/* <!-- Slider controls --> */}
            <div class="flex justify-between items-center mb-4">
              <h1 class="text-3xl font-poppins font-semibold">
                Aksi Tanggap yang sedang berjalan
              </h1>
              <div class="flex">
                <button
                  type="button"
                  class="flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  class="flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>

            {/* <!-- Carousel wrapper --> */}
            <div>
              <div className="flex justify-between">
                <CardAksi
                  image={cardAksi1}
                  tag1AksiReg={<TagAksiReg teksTag="Reguler" />}
                  tag2AksiReg={<TagAksiReg teksTag="Sosial masyarakat" />}
                  judulCard="Salurkan Bantuan Untuk Korban Gempa Bumi Cianjur"
                  subCard="Palang Merah Indonesia"
                  teksTanggal="10 Maret 2023"
                  teksLokasi="Kabupaten Cianjur, Jawa Barat"
                  link="#"
                />
                <CardAksi
                  image={cardAksi2}
                  tag1AksiReg={<TagAksiEkstensi teksTag="Ekstensi" />}
                  tag2AksiReg={<TagAksiEkstensi teksTag="Sosial masyarakat" />}
                  judulCard="Peduli Banjir untuk Masyarakat Kabupaten Lahat"
                  subCard="BNPB"
                  teksTanggal="12 - 17 Maret 2023"
                  teksLokasi="Lahat, Sumatera Barat"
                  link="#"
                />
                <CardAksi
                  image={cardAksi3}
                  tag1AksiReg={<TagAksiReg teksTag="Reguler" />}
                  tag2AksiReg={<TagAksiReg teksTag="Sosial masyarakat" />}
                  judulCard="Pelatihan Aksi Tanggap Bencana Alam MDMC"
                  subCard="MDMC"
                  teksTanggal="19 Maret 2023"
                  teksLokasi="Pangandaran, Jawa Barat"
                  link="#"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 2 */}
      <section className="mx-auto px-4 justify-center bg-cover bg-no-repeat bg-[url('./img/hero2.png')]">
        <div className="text-center py-20">
          <h1 className="text-white font-poppins font-semibold text-4xl">
            Bergabung bersama kami, menjadi masyarakat yang <br></br> aktif,
            cepat, dan efektif memberikan dampak perubahan
          </h1>
        </div>
        <div className="flex justify-center py-24">
          <div className="px-8">
            <ButtonSecondary TextButton={"Gabung Sebagai Relawan"} />
          </div>
          <div className="px-8">
            <ButtonPrimary TextButton="Gabung Sebagai Organisasi" />
          </div>
        </div>
      </section>

      {/* Card Doa dan Dukungan */}
      <section className="h-min mx-auto px-4 max-w-screen-xl pt-5">
        {/* h1 */}
        <div>
          <div class="flex justify-between items-center mb-4 py-3">
            <h1 class="text-3xl font-poppins font-semibold">
              Doa dan Dukungan
            </h1>
            <div class="flex">
              <button
                type="button"
                class="flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-black">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* card doa */}
        <div className="flex justify-between">
          <CardDoa
            teksNama="Orang Baik"
            teksJam="1h - Salurkan Bantuan unt..."
            teksDoa="Semoga seluruh masyarakat Kabupaten Cianjur yang terdampak bencana diberi ketabahan, kekuatan dan segera pulih dari musibah yang menghampiri. Aamiin"
            jmlOrang={5}
          />
          <CardDoa
            teksNama="Warga Cianjur"
            teksJam="2h - Salurkan Bantuan unt..."
            teksDoa="Doakan kami masyarakat Kabupaten Cianjur semoga semakin banyak korban yang diberi pertolongan dan diberi bantuan yang layak akibat gempa yang melanda. Aamiin"
            jmlOrang={21}
          />
          <CardDoa
            teksNama="Supriman Armadi"
            teksJam="2h - Peduli Banjir unt..."
            teksDoa="Semoga banjir dapat segera berlalu dan masyarakat Kabupaten Lahat dapat bantuan yang layak selama evakuasi aksi tanggap yang dilakukan oleh BNPB. Aamiin"
            jmlOrang={16}
          />
        </div>
        {/* icon */}
        <div className="flex justify-center items-center my-6">
          <button className="w-3 h-3 bg-secondary rounded-full"></button>
          <button className="w-3 h-3 bg-gray-500 rounded-full mx-3"></button>
          <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
        </div>
      </section>

      {/* Card Artikel dan Berita */}
      <section className="mx-auto p-4 max-w-screen-xl">
        <h1 className="font-poppins text-3xl font-semibold py-4">
          Artikel dan Berita Terbaru
        </h1>
        <CardArtikelLandingPage
          teksArtikel="Artikel"
          image={Artikel1}
          teksHashtag="#greenlife #iklim"
          isiArtikel="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et lacus augue. Nunc massa quam, consequat ut mi vitae, suscipit euismod magna. Nunc ornare eros non ornare placerat. Nullam elementum arcu nec cursus imperdiet. Quisque ac sem enim. Donec eu eros ac sapien ornare pulvinar. In vel risus vulputate, congue urna eget, congue urna."
          authorArtikel="1h - Supriman Armadi"
        />
        <br />
        <CardArtikelLandingPage
          teksArtikel="Berita"
          image={Artikel2}
          teksHashtag="#gempa #darurat"
          isiArtikel="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et lacus augue. Nunc massa quam, consequat ut mi vitae, suscipit euismod magna. Nunc ornare eros non ornare placerat. Nullam elementum arcu nec cursus imperdiet. Quisque ac sem enim. Donec eu eros ac sapien ornare pulvinar. In vel risus vulputate, congue urna eget, congue urna."
          authorArtikel="3h - Badan Nasional Penanggulangan Bencana"
        />
        <div className="py-4">
          <ButtonSecondary TextButton="Lihat Lebih Banyak" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
