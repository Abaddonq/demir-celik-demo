import Accordion, { Editor } from '@/components/Accordion';

const udcsSymposiums = [
  {
    name: "2023 – 6. Uluslararası Demir ve Çelik Sempozyumu (UDCS'23)",
    email: '',
    institution: (
      <div>
        <p className="mb-6">
          Karabük Üniversitesi Demir Çelik Enstitüsü tarafından düzenlenen 6. Uluslararası Demir ve Çelik Sempozyumu (UDCS'23), 11-13 Mayıs 2023 tarihlerinde gerçekleştirilmiştir. Sempozyum, üniversite-sanayi iş birliğini güçlendirmek, sektörün karşılaştığı sorunlara akademik çözümler sunmak ve yeni iş birliklerine zemin hazırlamak amacıyla düzenlenmiştir. Etkinlikte, 81 bildiri sunulmuş; bu bildirilerin 26'sı sektör temsilcileri, geri kalanı ise 16 farklı üniversiteden akademisyenler tarafından hazırlanmıştır. Ayrıca, üç uluslararası üniversiteden katılım sağlanmıştır. Sempozyum, akademi ve sanayi temsilcilerini bir araya getirerek sektörün mevcut durumunu değerlendirmek ve geleceğe yönelik stratejik adımların atılmasını destekleyen önemli bir platform olmuştur. Organizasyon, Karabük Üniversitesi ve TÜBİTAK başta olmak üzere çeşitli destekçiler tarafından başarıyla gerçekleştirilmiştir.
        </p>
        <a
          href="https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/UDCS23_Proceedings-Book.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f97316] hover:bg-[#202b85] text-white font-bold py-4 px-8 rounded-lg transition shadow relative"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' }}
        >
          UDCS'23_Proceedings Book
        </a>
      </div>
    )
  },
  {
    name: "2021 – 5. Uluslararası Demir ve Çelik Sempozyumu (UDCS'21)",
    email: '',
    institution: (
        <div>
          <p className="mb-6">
          Karabük Üniversitesi Demir Çelik Enstitüsü tarafından düzenlenen 5. Uluslararası Demir ve Çelik Sempozyumu (UDCS'21), 1-3 Nisan 2021 tarihlerinde Demir Çelik Enstitüsü Konferans Salonu'nda ve çevrimiçi olarak gerçekleştirilmiştir. Sempozyum, üniversite ve sanayi kuruluşlarını bir araya getirerek demir-çelik sektöründe yeni fikirlerin geliştirilmesi ve iş birliği fırsatlarının artırılmasını hedeflemiştir.
          Etkinlikte, 86 bildiri sunulmuş; bildirilerin 32'si sanayi temsilcileri tarafından hazırlanmıştır. Çevrimiçi ve yüz yüze formatların bir arada kullanıldığı bu sempozyum, akademik ve sektörel katılımın çeşitliliğiyle dikkat çekmiştir. Organizasyona, Karabük Üniversitesi'nin yanı sıra TÜBİTAK ve diğer sponsorlar destek vermiştir. Sempozyum, sektörün mevcut durumunun değerlendirilmesi ve geleceğe yönelik stratejilerin tartışılması için önemli bir platform oluşturmuştur.
          </p>
          <a
            href="https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/UDCS21_Proceedings-Book.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f97316] hover:bg-[#202b85] text-white font-bold py-4 px-8 rounded-lg transition shadow relative"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' }}
          >
            UDCS'21_Proceedings Book
          </a>
        </div>
      )
  },
  {
    name: "2019 – 4. Uluslararası Demir ve Çelik Sempozyumu (UDCS'19)",
    email: '',
    institution: (
        <div>
          <p className="mb-6">
          Karabük Üniversitesi Demir Çelik Enstitüsü tarafından düzenlenen 4. Uluslararası Demir ve Çelik Sempozyumu (UDCS'19), 4-6 Nisan 2019 tarihlerinde Karabük Üniversitesi Demir Çelik Enstitüsü Konferans Salonu'nda gerçekleştirilmiştir. Sempozyum, üniversite-sanayi iş birliğini güçlendirmeyi, demir-çelik sektörüyle ilgili yeni fikirlerin geliştirilmesine öncülük etmeyi ve uluslararası düzeyde bilgi paylaşımını artırmayı amaçlamıştır.
          Etkinlik kapsamında, 40 farklı üniversiteden ve 11 ülkeden toplam 170 bildiri sunulmuş; bildirilerin 37'si sektör temsilcilerinin katkılarıyla hazırlanmıştır. Sözlü ve poster sunumlarıyla zenginleşen sempozyum, akademisyenler ve sanayi temsilcilerini bir araya getirerek iş birliği ve Ar-Ge projeleri için önemli bir platform sağlamıştır. Etkinliğin başarısında, Karabük Üniversitesi, TÜBİTAK ve diğer sponsorların desteği önemli rol oynamıştır.
          </p>
          <a
            href="https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/UDCS19_Proceedings-Book.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f97316] hover:bg-[#202b85] text-white font-bold py-4 px-8 rounded-lg transition shadow relative"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' }}
          >
            UDCS'19_Proceedings Book
          </a>
        </div>
      )
  },
  {
    name: "2017 – 3. Uluslararası Demir ve Çelik Sempozyumu (UDCS'17)",
    email: '',
    institution: (
        <div>
          <p className="mb-6">
          Karabük Üniversitesi Demir Çelik Enstitüsü tarafından düzenlenen 3. Uluslararası Demir ve Çelik Sempozyumu (UDCS'17), 3-5 Nisan 2017 tarihlerinde Karabük'te gerçekleştirilmiştir. Sempozyum, dünya genelinden akademisyenleri, araştırmacıları, mühendisleri, demir-çelik üreticilerini, ihracatçı ve ithalatçıları, tedarikçileri, teknoloji üreticilerini ve sivil toplum kuruluşlarını bir araya getirerek demir ve çelik ürünlerinin yapısının ve özelliklerinin geliştirilmesine yönelik yeni çalışmalar ve yöntemlerin paylaşılmasını hedeflemiştir.
          Etkinlik kapsamında; metalurji ve malzeme, döküm, ısıl işlem, kaplama ve korozyon, enerji ve çevre, otomasyon, iş sağlığı ve güvenliği gibi geniş bir yelpazede konular ele alınmış, ayrıca sektörel paneller ve özel oturumlar düzenlenmiştir. Sempozyuma ulusal ve uluslararası düzeyde davetli konuşmacılar, akademisyenler ve sektör temsilcileri katkı sağlamış, etkinlik başarılı bir şekilde tamamlanmıştır.
          </p>
          <a
            href="https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/UDCS17_Proceedings-Book.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f97316] hover:bg-[#202b85] text-white font-bold py-4 px-8 rounded-lg transition shadow relative"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' }}
          >
            UDCS'17_Proceedings Book
          </a>
        </div>
      )
  },
];

export default function UDCT() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#202b85] mb-8">Uluslararası Demir ve Çelik Sempozyumu (UDCS)</h1>
      <p className="text-lg text-[#62636f] mb-4">
        Uluslararası Demir ve Çelik Sempozyumu (UDÇS), Karabük Üniversitesi Demir Çelik Enstitüsü tarafından her iki yılda bir düzenlenen, demir-çelik sektörü ve ilgili akademik disiplinleri bir araya getiren prestijli bir etkinliktir. Karabük Üniversitesi Demir Çelik Enstitüsü, modern laboratuvarları, sanayi ile güçlü bağlantıları ve nitelikli araştırma projeleriyle demir-çelik sektöründe yeniliklerin öncüsü konumundadır. Türkiye'nin ilk entegre demir-çelik fabrikasına ev sahipliği yapan Karabük şehri ise köklü sanayi geçmişi ile bu etkinlikler için ideal bir ortam sunmaktadır. Sempozyum, sektördeki güncel gelişmelerin ve yenilikçi çözümlerin tartışılmasını sağlamakta, akademi ve sanayi arasındaki iş birliğini güçlendirmeyi amaçlamaktadır.
      </p>
      <p className="text-lg text-[#62636f] mb-4">
        UDCS, demir-çelik sektörü için bilgi paylaşımı ve iş birliğini teşvik eden küresel bir platform sunmaktadır. Her etkinlikte, bilim insanları, mühendisler ve sanayi temsilcileri bir araya gelerek yeni teknolojiler, sürdürülebilir yaklaşımlar ve sektörel dönüşümler üzerine fikir alışverişinde bulunmaktadır. Hibrit formatta düzenlenen oturumlar, paneller ve özel görüşmeler sayesinde geniş bir etkileşim alanı sağlanmaktadır.
      </p>
      <p className="text-lg text-[#62636f] mb-4">
        UDCS'nin temel amaçları arasında şunlar yer almaktadır:
      </p>
      <ul className="list-disc pl-8 text-[#62636f] mb-4 text-base">
        <li>Bilgi Paylaşımı: Akademik ve sektörel araştırmaların tartışılması.</li>
        <li>İş Birliği: Üniversite-sanayi ilişkilerini güçlendirmek ve yeni projelere zemin hazırlamak.</li>
        <li>Geleceğe Yönelik Çözümler: Demir-çelik endüstrisi için yenilikçi teknolojiler ve sürdürülebilir yaklaşımlar geliştirmek.</li>
      </ul>
      <p className="text-lg text-[#62636f] mb-8">
        En son 2023 yılında gerçekleştirilen 6'ncı düzenlenen UDCS, önceki başarıların üzerine yeni bir vizyon ekleyerek geleceğe yönelik stratejik adımlar atılmasını sağlamıştır.
      </p>
      <div className="mt-16">
        <Accordion title="Önceki Uluslararası Demir ve Çelik Sempozyumları" items={udcsSymposiums} />
      </div>
    </div>
  );
}