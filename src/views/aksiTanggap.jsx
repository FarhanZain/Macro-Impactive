import Navbar from "../components/Navbar";
import ButtonSecondary from "../components/buttonSecondary";
import CardAksi from "../components/cardAksi";
import Footer from "../components/footer";
import InputSelect from "../components/inputSelect";
import TagAksiEkstensi from "../components/tagAksiEkstensi";
import TagAksiReg from "../components/tagAksiReg";
import cardAksi1 from "../img/cardAksi1.png";
import cardAksi2 from "../img/cardAksi2.png";
import cardAksi3 from "../img/cardAksi3.png";

export default function AksiTanggap() {
  return (
    <>
      <Navbar />

      {/* Card List Aksi Tanggap */}
      <section className="max-w-screen-xl mx-auto px-4 pt-10">
        <div className="flex justify-between items-center pb-6">
          <h1 className="font-semibold font-poppins text-3xl">
            Cari Aksi Tanggap, 18 Aksi tanggap membutuhkanmu{" "}
          </h1>
          <div>
            <InputSelect
              label="Urutkan Berdasarkan"
              textDefault="Sedang Berjalan"
              teksOpt1="..."
              teksOpt2="..."
              teksOpt3="..."
              teksOpt4="..."
            />
          </div>
        </div>
        <div class=" grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardAksi
            image={cardAksi1}
            tag1AksiReg={<TagAksiReg teksTag="Reguler" />}
            tag2AksiReg={<TagAksiReg teksTag="Sosial masyarakat" />}
            judulCard="Salurkan Bantuan Untuk Korban Gempa Bumi Cianjur"
            subCard="Palang Merah Indonesia"
            teksTanggal="10 Maret 2023"
            teksLokasi="Kabupaten Cianjur, Jawa Barat"
            link="/Aksi-Tanggap-Detail"
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
        </div>
        <div className="py-10 text-center">
          <ButtonSecondary TextButton="Lihat Lebih Banyak" />
        </div>
      </section>

      <Footer />
    </>
  );
}
