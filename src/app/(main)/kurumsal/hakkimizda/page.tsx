import Image from "next/image";
import React from "react";
import PageHeader from "@/components/PageHeader";
import { FaCheck } from "react-icons/fa";

/* ---------------------------------- SVG ---------------------------------- */
const atomIcon = (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className="text-white mr-3 flex-shrink-0"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2a10 10 0 0 1 0 20" stroke="currentColor" strokeWidth="2" />
    <path d="M2 12a10 10 0 0 0 20 0" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

/* ----------------------------- UI COMPONENT ------------------------------ */
export default function Hakkimizda() {
  return (
    <div>
      {/* Header */}
      <PageHeader title="Hakkımızda" imageUrl="/images/demir-celik.avif" />

      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 flex flex-col gap-10 md:gap-14">
        {/* Tarihçemiz */}
        <section>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#202b85] mb-3">
            Tarihçemiz
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#202b85] leading-relaxed">
            Ülkemizin ve Üniversitemizin ilklerinden olan Karabük Üniversitesi
            Demir Çelik Enstitüsü'nün (KDÇE) kuruluşuna ait karar, 03/07/2011
            tarih, 27983 sayı ve 2011/2018 karar sayı ile Resmi Gazete'de
            yayımlanmıştır. 2012 yılından itibaren aktif olarak hizmet vermeye
            başlamıştır. 2016 yılında TÜRKAK tarafından 17025 standardına göre
            14 farklı deney metodundan akredite edilmiştir. Günümüzde MARGEM
            (Malzeme Geliştirme Uygulama ve Araştırma Merkezi) ve YEMMMER 'e
            (Yenilenebilir Enerji Mühendisliği Araştırma ve Uygulama Merkezi) de
            ev sahipliği yaparak koordineli çalışmaktadır.
          </p>
        </section>

        {/* Orta kısım: altıgen kutular + Amacımız */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Altıgen Kutular */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            {[
              {
                id: "kalite",
                bg: "bg-[#f97316]",
                icon: <path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" />,
                label: (
                  <>
                    Sıkı Kalite
                    <br />
                    Uygulamaları
                  </>
                ),
              },
              {
                id: "araclar",
                bg: "bg-[#202b85]",
                icon: <path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />,
                label: (
                  <>
                    Yeni, Gelişmiş
                    <br />
                    Araçlar
                  </>
                ),
              },
              {
                id: "cozumler",
                bg: "bg-cyan-300 text-[#202b85] border border-[#202b85]",
                icon: <path d="M8 17v-1a4 4 0 014-4h0a4 4 0 014 4v1" />,
                label: (
                  <>
                    Özelleştirilmiş
                    <br />
                    Laboratuvar
                    <br />
                    Çözümleri
                  </>
                ),
              },
            ].map(({ id, bg, icon, label }) => (
              <div
                key={id} 
                className={`w-40 h-36 md:w-44 md:h-40 ${bg} flex flex-col items-center justify-center rounded-[2rem] shadow-lg`}
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 mb-1 md:mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {icon}
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="font-bold text-center text-xs md:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Amacımız */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#202b85] mb-4 text-center md:text-left">
              Amacımız
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#202b85] font-medium leading-relaxed text-center md:text-left">
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
            </p>
          </div>
        </section>

        {/* Misyonumuz */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px_0_0_40px] md:rounded-[60px_0_0_60px] border-[8px] md:border-[12px] border-[#f97316] z-10 pointer-events-none" />
              <Image
                src="/images/Laboratuvarlar.avif"
                alt="Misyonumuz"
                width={700}
                height={500}
                className="rounded-[40px_0_0_40px] md:rounded-[60px_0_0_60px] object-cover relative z-0 w-full"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#202b85] mb-4">
              Misyonumuz
            </h2>
            <p className="text-[#202b85] mb-4 font-medium text-sm sm:text-base">
              Demir Çelik Enstitüsü, toplumun gereksinimlerini karşılayacak
              mamul ürünlerin oluşturulması için ihtiyaç duyulan güçlü ve
              sürdürülebilir bir Türk demir çelik endüstrisini desteklemek
              amacıyla, demir çelik alanında çalışanları eğitmek ve
              şekillendirmek istemektedir. Bu hedefle, Demir Çelik Enstitüsü'nün
              özgörevi:
            </p>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Demir çelik endüstrisine ait temel konularda kamu politikalarına etkide bulunmak,",
                "Demir çelik endüstrisinde çalışanları yeni teknoloji ve süreçler hakkında eğitmek,",
                "İş sağlığı ve iş güvenliği ve yaşanabilir bir çevre için önlemler hakkında bilgilendirmek,",
                "Endüstri verilerini, karar vericiler, demir çelik şirketleri ve kamu için yorumlamak, demir üretim süreçleri, üretim, enerji verimliliği, yatırımlar ve eğilimler hakkında önerilerde bulunmak,",
                "Şirketleri araştırma ve geliştirme için ortak çalışmaya ikna etmek,",
                "Demir çelik endüstrisinin bütününde, mesleki standartlara katkıda bulunmaktır.",
              ].map((txt) => (
                <li
                  key={txt}
                  className="flex items-start text-[#202b85] font-bold text-sm sm:text-base"
                >
                  <FaCheck className="text-[#f97316] mt-1 mr-2 flex-shrink-0" />
                  {txt}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vizyonumuz */}
        <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-0">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-[0_40px_40px_0] md:rounded-[0_60px_60px_0] bg-[#202b85] z-0" />
              <Image
                src="/images/lab.avif"
                alt="Vizyonumuz"
                width={700}
                height={500}
                className="rounded-[0_40px_40px_0] md:rounded-[0_60px_60px_0] object-cover relative z-10 w-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#202b85] rounded-[0_40px_40px_0] md:rounded-[0_60px_60px_0] p-6 md:p-8 md:-mr-12 z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Vizyonumuz
            </h2>
            <p className="text-white mb-4 font-medium text-sm sm:text-base">
              Demir Çelik Enstitüsü Türk demir çelik endüstrisinin uluslararası
              rekabet edebilir olması için gelişmesini, alan çalışanları için iş
              sağlığı ve güvenliği konularında yüksek etik standartların
              oluşmasını amaçlar. Sürdürülebilir bir demir çelik endüstrisi için
              Demir Çelik Enstitüsü'nün özgörüsü:
            </p>
            <ul className="space-y-4">
              {[
                "Demir çelik endüstrisi ve diğer anahtar sektörler için zorlukları paylaşacak bir platform oluşturmak, bilim ışığında çözümler geliştirmek,",
                "Sürdürülebilir bir gelişme için yeni teknolojileri geliştirme amaçlı alandaki araştırmaları desteklemek,",
                "Yeni teknolojilerin kullanılmasıyla CO₂ atıklarının azaltılması için farkındalık oluşturmak,",
                "Çelikten yapılmış ürünlerin pazar payının artırılması yoluyla, en fazla geri dönüşümü olan bu malzemenin kullanılmasını desteklemek,",
                "Stratejik endüstrilerin gelişmesine güç sağlamak için gerekli olan yüksek performanslı çelik malzemelerin üretilmesini geliştirmektir.",
              ].map((txt) => (
                <li
                  key={txt}
                  className="flex items-start text-white font-bold text-sm sm:text-base"
                >
                  {atomIcon}
                  {txt}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* YouTube Video */}
      <div className="w-full flex justify-center pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            src="https://www.youtube.com/embed/15aD8aHANqM"
            title="Karabük Üniversitesi Demir Çelik Enstitüsü 2023-2024 Eğitim Öğretim Yılı Tanıtım Filmi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl shadow-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
