import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SEM Randevu Takvimi | Taramalı Elektron Mikroskobu | Demir Çelik Enstitüsü",
  description:
    "Karabük Üniversitesi Demir Çelik Enstitüsü SEM laboratuvarı için güncel randevu takvimini inceleyin.",
  keywords:
    "sem randevu, sem takvim, taramalı elektron mikroskobu, sem laboratuvarı, demir çelik enstitüsü, karabük üniversitesi, laboratuvar randevu",
  openGraph: {
    title: "DCE SEM Laboratuvarı Randevu Takvimi",
    description:
      "Enstitümüzün SEM laboratuvarında analiz yaptırmak için güncel randevu durumunu buradan kontrol edin.",
    url: "https://demircelik.karabuk.edu.tr/sem-randevu",
    siteName: "Karabük Üniversitesi Demir Çelik Enstitüsü",
    type: "website",
  },
};

const months = [
  { name: "Ocak", image: "/images/ocak.png" },
  { name: "Şubat", image: "/images/şubat.png" },
  { name: "Mart", image: "/images/mart.png" },
  { name: "Nisan", image: "/images/nisan.png" },
  { name: "Mayıs", image: "/images/mayis.png" },
  { name: "Haziran", image: "/images/haziran.png" },
];

export default function SemRandevuPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        {/* Page header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#202b85] mb-8 md:mb-12">
          SEM Randevu Takvimi (Ocak – Haziran)
        </h1>

        {/* Month selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {months.map((m) => (
            <a
              key={m.name}
              href={`#${m.name.toLowerCase()}`}
              className="px-4 py-2 rounded-lg font-semibold border transition-colors
                         bg-white dark:bg-gray-800 text-[#202b85] border-gray-300
                         hover:bg-[#202b85] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#202b85]"
            >
              {m.name}
            </a>
          ))}
        </div>

        {/* Calendar images */}
        <div className="space-y-10">
          {months.map((m) => (
            <section
              key={m.name}
              id={m.name.toLowerCase()}
              className="scroll-mt-20"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {m.name}
              </h2>

              {/* outer wrapper: full-width, scrollable on small screens */}
              <div className="w-full overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
                {/* inner wrapper keeps aspect ratio and minimal zoom level */}
                <div className="min-w-[768px] md:min-w-full">
                  <img
                    src={m.image}
                    alt={`${m.name} SEM randevu takvimi`}
                    className="w-full h-auto object-contain"
                    style={{
                      minWidth: 768,
                    }} /* guarantees readable text on phones */
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
