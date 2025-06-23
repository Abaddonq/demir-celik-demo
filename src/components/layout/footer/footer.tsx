import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800">
      {/* Mavi arkaplan bölümü */}
      <div className="bg-blue-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kurumsal Bilgiler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Demir Çelik Enstitüsü</h3>
            <p className="mb-2">Karabük Üniversitesi Demir Çelik Enstitüsü</p>
            <p className="mb-2">Mükemmel Araştırma ve Geliştirme Merkezi</p>
            <p className="mb-2">
              <Link href="mailto:drc@karabuk.edu.tr" className="hover:underline">
                drc@karabuk.edu.tr
              </Link>
            </p>
            <p>+90 370 416 6001</p>
            <p className="mt-4">Demir Çelik Kampüsü 78050 Karabük</p>
          </div>

          {/* Laboratuvarlar - 1. Kolon */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <Link href="/laboratuvarlar" className="hover:underline">
                Laboratuvarlar
              </Link>
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              <li>
                <Link href="/laboratuvarlar/dinamik-test" className="hover:underline">
                  Dinamik Test Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/kesitli-olcum" className="hover:underline">
                  Kesitli Gazete Ölçüm Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/aydinlatma" className="hover:underline">
                  Sektörel Aydınlatma Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/sok-test" className="hover:underline">
                  Şok Test Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/2020-2021" className="hover:underline">
                  2020-2021 Laboratuvarı
                </Link>
              </li>
            </ul>
          </div>

          {/* Laboratuvarlar - 2. Kolon */}
          <div>
            <h3 className="text-xl font-bold mb-4 invisible">Laboratuvarlar</h3>
            <ul className="grid grid-cols-1 gap-2">
              <li>
                <Link href="/laboratuvarlar/motor-uretim" className="hover:underline">
                  Müze Motor Üretim Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/mudurluk" className="hover:underline">
                  Müdürlük Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/temel-teknik" className="hover:underline">
                  Temel Teknik Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/tahsis" className="hover:underline">
                  Tahsis Laboratuvarı
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar/konuslu" className="hover:underline">
                  Konuşlu Laboratuvarı
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Beyaz arkaplan bölümü */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hizmet Raporlama */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">
              <Link href="/hizmet-raporlama" className="hover:underline">
                Hizmet Raporlama
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmet-raporlama/durumsal-analiz" className="hover:underline">
                  Durumsal Kültür Analiz Raporlama
                </Link>
              </li>
              <li>
                <Link href="/hizmet-raporlama/surekli-raporlama" className="hover:underline">
                  Sürekli Raporlama
                </Link>
              </li>
              <li>
                <Link href="/hizmet-raporlama/surec-raporlama" className="hover:underline">
                  Süreçlerin Raporlanması
                </Link>
              </li>
              <li>
                <Link href="/hizmet-raporlama/elektronik-evrak" className="hover:underline">
                  Birikim Evrak Farkındalığı Elektronik
                </Link>
              </li>
              <li>
                <Link href="/hizmet-raporlama/finansman" className="hover:underline">
                  Birikim Evrak İşleyişine Finansman Oluşturulması
                </Link>
              </li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kurumsal" className="hover:underline">
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link href="/laboratuvarlar" className="hover:underline">
                  Laboratuvarlar
                </Link>
              </li>
              <li>
                <Link href="/hizmet-raporlama" className="hover:underline">
                  Hizmet Raporlama
                </Link>
              </li>
              <li>
                <Link href="http://drc.karabuk.edu.tr" className="hover:underline" target="_blank">
                  Resmi Web Sitesi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Telif hakkı */}
      <div className="bg-gray-100 py-4 px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Karabük Üniversitesi Demir Çelik Enstitüsü. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;