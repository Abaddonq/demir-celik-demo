import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-white text-gray-800">
    {/* Mavi arka plan: 4 sütun */}
    <div className="bg-blue-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolon: Demir Çelik Enstitüsü */}
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

        {/* Kolon: Kurumsal */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            <Link href="/kurumsal" className="hover:underline">
              Kurumsal
            </Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/kurumsal/hakkimizda" className="hover:underline">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/kurumsal/yonetim" className="hover:underline">
                Yönetim
              </Link>
            </li>
            <li>
              <Link href="/kurumsal/iletisim" className="hover:underline">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolon: Laboratuvarlar */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            <Link href="/laboratuvarlar" className="hover:underline">
              Laboratuvarlar
            </Link>
          </h3>
          <ul className="space-y-2">
            {["Dinamik Test Laboratuvarı", "Spektral Analiz Laboratuvarı", "SEM Laboratuvarı", "Statik Test Laboratuvarı", "XRD‑XRF Laboratuvarı", "Mikro Makro Sertlik Ölçüm Laboratuvarı", "Metalografi Laboratuvarı", "Talaş İmalat Atölyesi", "Termal Analiz Laboratuvarı", "Triboloji Laboratuvarı", "Isıl İşlem Laboratuvarı", "İnşaat Laboratuvarı", "Korozyon Laboratuvarı", "Kimyasal Analiz Laboratuvarı", "Metroloji Laboratuvarı", "Toz Metalurjisi Laboratuvarı"].map((lab) => (
              <li key={lab}>
                <Link
                  href={`/laboratuvarlar/${encodeURI(lab.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="hover:underline"
                >
                  {lab}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolon: Hizmet Raporlama */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            <Link href="/hizmet-raporlama" className="hover:underline">
              Hizmet Raporlama
            </Link>
          </h3>
          <ul className="space-y-2">
            {["Kurumsal Karbon Ayak İzi Raporlama Laboratuvarı", "SKDM Raporlama", "Sürdürülebilirlik Raporlaması", "Bina Enerji Performansının Belirlenmesi", "Bina Enerji İyileştirme Projelerinin Oluşturulması", "İç Mekan Hava Kalitesinin Belirlenmesi", "Yapılarda Isıl Köprülerin Belirlenmesi", "ISO 50001 Enerji Yönetim Sistemi", "Riskli Yapı Tespiti"].map((item) => (
              <li key={item}>
                <Link
                  href={`/hizmet-raporlama/${encodeURI(item.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Beyaz alt kısım */}
    <div className="py-4 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Sosyal Medya */}
        <div className="flex items-center gap-4">
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600">
            <FaFacebookF />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-800">
            <FaLinkedinIn />
          </Link>
        </div>

        {/* Telif */}
        <p className="text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} Karabük Üniversitesi Demir Çelik Enstitüsü. Tüm hakları saklıdır.
        </p>

        {/* Başa dön */}
        <Link href="#" className="text-sm text-blue-700 hover:underline">
          ↑ Başa dön
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
