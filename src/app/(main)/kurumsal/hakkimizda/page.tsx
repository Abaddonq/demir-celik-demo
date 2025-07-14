import Image from "next/image";
import React from "react";
import PageHeader from "@/components/PageHeader";
import { FaCheck } from "react-icons/fa";

const atomIcon = (
  <svg
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 24 24"
    className="text-white mr-4 flex-shrink-0"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2a10 10 0 0 1 0 20" stroke="currentColor" strokeWidth="2" />
    <path d="M2 12a10 10 0 0 0 20 0" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export default function Hakkimizda() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Hakkımızda" imageUrl="/images/demir-celik.jpg" />
      {/* Main Content with padding */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 pb-12 flex flex-col gap-12">
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold text-left text-[#202b85] mb-2">
          Tarihçemiz
        </h1>
        {/* Üst açıklama */}
        <div className="text-base md:text-lg font-semibold text-[#202b85] leading-relaxed mb-8">
          Ülkemizin ve Üniversitemizin ilklerinden olan Karabük Üniversitesi
          Demir Çelik Enstitüsü'nün (KDÇE) kuruluşuna ait karar, 03/07/2011
          tarih, 27983 sayı ve 2011/2018 karar sayı ile Resmi Gazete'de
          yayımlanmıştır. 2012 yılından itibaren aktif olarak hizmet vermeye
          başlamıştır. 2016 yılında TÜRKAK tarafından 17025 standardına göre 14
          farklı deney metodundan akredite edilmiştir. Günümüzde MARGEM (Malzeme
          Geliştirme Uygulama ve Araştırma Merkezi) ve YEMMMER 'e (Yenilenebilir
          Enerji Mühendisliği Araştırma ve Uygulama Merkezi) de ev sahipliği
          yaparak koordineli çalışmaktadır.
        </div>
        {/* Orta kısım: görsel ve kutular */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Sol: 3 altıgen kutu */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            <div
              className="w-44 h-40 bg-[#f97316] text-white flex flex-col items-center justify-center rounded-[2rem] shadow-lg mb-2"
              style={{
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              }}
            >
              <svg
                className="w-10 h-10 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-bold text-center text-sm">
                Sıkı Kalite
                <br />
                Uygulamaları
              </span>
            </div>
            <div
              className="w-44 h-40 bg-[#202b85] text-white flex flex-col items-center justify-center rounded-[2rem] shadow-lg mb-2"
              style={{
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              }}
            >
              <svg
                className="w-10 h-10 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                <path d="M12 7v.01" />
              </svg>
              <span className="font-bold text-center text-sm">
                Yeni, Gelişmiş
                <br />
                Araçlar
              </span>
            </div>
            <div
              className="w-44 h-40 bg-cyan-300 text-[#202b85] flex flex-col items-center justify-center rounded-[2rem] shadow-lg border border-[#202b85]"
              style={{
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              }}
            >
              <svg
                className="w-10 h-10 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 17v-1a4 4 0 014-4h0a4 4 0 014 4v1" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-bold text-center text-sm">
                Özelleştirilmiş
                <br />
                Laboratuvar
                <br />
                Çözümleri
              </span>
            </div>
          </div>
          {/* Sağ: Amacımız */}
          <div className="flex-1 md:ml-8 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-[#202b85] mb-4 text-center md:text-left">
              Amacımız
            </h2>
            <div className="text-base md:text-lg text-[#202b85] font-medium leading-relaxed text-center md:text-left">
              Karabük Üniversitesi Demir Çelik Enstitüsü'nün (KDÇE) amacı;
              Türkiye ve dünyada demir çelik üretimi konusunda yeni
              teknolojilerin geliştirilmesine, ürün kalitesinin artırılmasına,
              katma değeri yüksek vasıflı çelik üretilmesine, üretim atıklarının
              değerlendirilmesine, demir çelik tesislerindeki verimliliğin
              artırılmasına ve demir çelik üretiminde yerli hammadde ve
              cevherlerin etkili ve verimli kullanımına yönelik araştırmalar
              için gerekli bilimsel ortamı sağlamanın yanı sıra, ülkemizde
              üretilen ürünlerin uluslararası düzeyde kabul gören akreditasyon
              koşullarında kalite kontrol testlerinin yapılmasına yönelik alt
              yapı oluşturmak, üretici/kullanıcı ve bu alanlarda araştırma yapan
              kamu ve özel sektör kuruluşları ile işbirliği yaparak bilimsel
              araştırmalar yapmak, yaptırmak, koordine etmek ve Türkiye'nin
              demir çelik alanındaki strateji ve politikalarına katkı
              sağlamaktır.
            </div>
          </div>
        </div>
        {/* Misyonumuz */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <div className="relative w-full md:w-1/2 flex-shrink-0">
            <div className="absolute inset-0 rounded-[60px_0_0_60px] border-[12px] border-[#f97316] z-10 pointer-events-none"></div>
            <Image
              src="/images/Laboratuvarlar.png"
              alt="Misyonumuz"
              width={700}
              height={500}
              className="rounded-[60px_0_0_60px] object-cover relative z-0"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-[#202b85] mb-4">
              Misyonumuz
            </h2>
            <p className="text-[#202b85] mb-4 font-medium">
              Demir Çelik Enstitüsü, toplumun gereksinimlerini karşılayacak
              mamul ürünlerin oluşturulması için ihtiyaç duyulan güçlü ve
              sürdürülebilir bir Türk demir çelik endüstrisini desteklemek
              amacıyla, demir çelik alanında çalışanları eğitmek ve
              şekillendirmek istemektedir.Bu hedefle, Demir Çelik Enstitüsü'nün
              özgörevi:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-[#202b85] font-bold">
                <FaCheck className="text-[#f97316] mt-1 mr-2 text-xl flex-shrink-0" />{" "}
                Demir çelik endüstrisine ait temel konularda kamu politikalarına
                etkide bulunmak,
              </li>
              <li className="flex items-start text-[#202b85] font-bold">
                <FaCheck className="text-[#f97316] mt-1 mr-2 text-xl flex-shrink-0" />{" "}
                Demir çelik endüstrisinde çalışanları yeni teknoloji ve süreçler
                hakkında eğitmek,
              </li>
              <li className="flex items-start text-[#202b85] font-bold">
                <FaCheck className="text-[#f97316] mt-1 mr-2 text-xl flex-shrink-0" />{" "}
                İş sağlığı ve iş güvenliği ve yaşanabilir bir çevre için
                önlemler hakkında bilgilendirmek,
              </li>
              <li className="flex items-start text-[#202b85] font-bold">
                <FaCheck className="text-[#f97316] mt-1 mr-2 text-xl flex-shrink-0" />{" "}
                Endüstri verilerini, karar vericiler, demir çelik şirketleri ve
                kamu için yorumlamak, demir üretim süreçleri, üretim, enerji
                verimliliği, yatırımlar ve eğilimler hakkında önerilerde
                bulunmak,
              </li>
              <li className="flex items-start text-[#202b85] font-bold">
                <FaCheck className="text-[#f97316] mt-1 mr-2 text-xl flex-shrink-0" />{" "}
                Şirketleri araştırma ve geliştirme için ortak çalışmaya ikna
                etmek,
              </li>
              <li className="flex items-start text-[#202b85] font-bold">
                <FaCheck className="text-[#f97316] mt-1 mr-2 text-xl flex-shrink-0" />{" "}
                Demir çelik endüstrisinin bütününde, mesleki standartlara
                katkıda bulunmaktır.
              </li>
            </ul>
          </div>
        </div>
        {/* Vizyonumuz */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-12">
          <div className="relative w-full md:w-1/2 flex-shrink-0">
            <div className="absolute inset-0 rounded-[0_60px_60px_0] bg-[#202b85] z-0"></div>
            <Image
              src="/images/lab.jpg"
              alt="Vizyonumuz"
              width={700}
              height={500}
              className="rounded-[0_60px_60px_0] object-cover relative z-10"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#202b85] rounded-[0_60px_60px_0] p-8 md:-mr-12 z-10 relative">
            <h2 className="text-4xl font-bold text-white mb-4">Vizyonumuz</h2>
            <p className="text-white mb-4 font-medium">
              Demir Çelik Enstitüsü Türk demir çelik endüstrisinin uluslar arası
              rekabet edebilir olması için gelişmesini, alan çalışanları için iş
              sağlığı ve güvenliği konularında yüksek etik standartların
              oluşmasını amaçlar. Sürdürülebilir bir demir çelik endüstrisi için
              Demir Çelik Enstitüsü'nün özgörüsü:
            </p>
            <ul className="space-y-6">
              <li className="flex items-start text-white font-bold">
                {atomIcon} Demir çelik endüstrisi ve diğer anahtar sektörler
                için zorlukları paylaşacak bir platform oluşturmak, bilim
                ışığında çözümler geliştirmek,
              </li>
              <li className="flex items-start text-white font-bold">
                {atomIcon} Sürdürülebilir bir gelişme için yeni teknolojileri
                geliştirme amaçlı alandaki araştırmaları desteklemek,
              </li>
              <li className="flex items-start text-white font-bold">
                {atomIcon} Yeni teknolojilerin kullanılmasıyla CO₂ atıklarının
                azaltılması için farkındalık oluşturmak,
              </li>
              <li className="flex items-start text-white font-bold">
                {atomIcon} Çelikten yapılmış ürünlerin pazar payının artırılması
                yoluyla, en fazla geri dönüşümü olan bu malzemenin
                kullanılmasını desteklemek,
              </li>
              <li className="flex items-start text-white font-bold">
                {atomIcon} Stratejik endüstrilerin gelişmesine güç sağlamak için
                gerekli olan yüksek performanslı çelik malzemelerin üretilmesini
                geliştirmektir.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* YouTube Video */}
      <div className="w-full flex justify-center pb-12">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/15aD8aHANqM"
            title="Karabük Üniversitesi Demir Çelik Enstitüsü 2023-2024 Eğitim Öğretim Yılı Tanıtım Filmi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl shadow-lg w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
