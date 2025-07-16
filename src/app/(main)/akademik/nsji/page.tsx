import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import RecentIssues from "@/components/RecentIssues";
import Accordion, { Editor } from "@/components/Accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NSJI - Doğa Bilimleri Dergisi | DCE Doğa Bilimleri Dergisi',
  description: 'DCE Doğa Bilimleri Dergisi, doğa bilimleri alanındaki özgün araştırmaların yayımlandığı hakemli, uluslararası ve ücretsiz bir dergidir. Yılda iki kez yayımlanan dergimiz, mühendislik ve doğa bilimleri alanındaki yenilikçi çalışmaları bilim dünyasına sunar.',
  keywords: 'doğa bilimleri dergisi, bilimsel dergi, makine mühendisliği, malzeme mühendisliği, enerji, polimer, gıda bilimleri, orman bilimleri, hakemli dergi, uluslararası dergi, ücretsiz dergi',
  authors: [
    { name: 'Dr. Recep Demirsöz' },
    { name: 'Dr. Safa Polat' },
    { name: 'Dr. Erhan Kayabaşı' },
    
  ],
  openGraph: {
    title: 'NSJI - Doğa Bilimleri Dergisi | Araştırma, Yayın, Sürdürülebilirlik',
    description: 'Doğa bilimleri ve temel mühendislik alanlarında hakemli, uluslararası ve ücretsiz yayın yapan NSJI Dergisi. Makale göndermek veya son sayıları incelemek için sitemizi ziyaret edin.',
    url: 'https://dergipark.org.tr/tr/pub/nsjisi',
    siteName: 'NSJI - Doğa Bilimleri Dergisi',
    images: [
      {
        url: '/images/dergis.jpg',
        width: 400,
        height: 550,
        alt: 'NSJI Dergisi Kapak Resmi',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSJI - Doğa Bilimleri Dergisi',
    description: 'Doğa bilimleri ve temel mühendislik alanlarında hakemli, uluslararası ve ücretsiz yayın yapan NSJI Dergisi. Makale göndermek veya son sayıları incelemek için sitemizi ziyaret edin.',
    images: ['/images/dergis.jpg'],
  },
};

const basEditorler: Editor[] = [
  {
    name: "Dr. Recep Demirsöz",
    email: "recepdemirsoz@karabuk.edu.tr",
    institution: "Karabük Üniversitesi, Demir Çelik Enstitüsü, TR."
  },
  {
    name: "Dr. Safa Polat",
    email: "safapolat@karabuk.edu.tr",
    institution: "Karabük Üniversitesi, Demir Çelik Enstitüsü, TR"
  },
  {
    name: "Dr. Erhan Kayabaşı",
    email: "erhankayabasi@karabuk.edu.tr",
    institution: "Karabük Üniversitesi, Demir Çelik Enstitüsü, TR"
  },
];

const editorKurulu: Editor[] = [
  {
    name: "Dr. Munish Kumar Gupta",
    email: "munishguptanit@gmail.com",
    institution: "Opole University of Technology, Poland"
  },
  {
    name: "Dr. Josias Van Der Merwe",
    email: "Josias.VanDerMerwe@wits.ac.za",
    institution: "Wits University, South Africa"
  },
  {
    name: "Dr. Pasquale Daniele",
    email: "pasquale.cavaliere@unisalento.it",
    institution: "Università del Salento, Italy"
  },
  {
    name: "Dr. Michael Oluwatosin Bodunrin",
    email: "Michael.Bodunrin@wits.ac.za",
    institution: "Wits University, South Africa"
  },
  {
    name: "Dr. Desmond Klenam",
    email: "Desmond.klenam@wits.ac.za",
    institution: "Wits University, South Africa"
  },
  {
    name: "Dr. Marta Michalska-Domanska",
    email: "marta.michalska@wat.edu.pl",
    institution: "Military University of Technology, Poland"
  },
  {
    name: "Dr. Nimel Sworna Ross",
    email: "nimelross@gmail.com",
    institution: "University of Johannesburg, South Africa"
  },
  {
    name: "Dr. Mozammel Mia",
    email: "mozammel.mia@bracu.ac.bd",
    institution: "Brac University, Bangladesh"
  },
];

const MakineveMalzemeMühendisliğiAnabilimDalı: Editor[] = [
  {
    name: "Dr. Burak Dikici",
    email: "burakdikici@atauni.edu.tr",
    institution: "Atatürk Üniversitesi, TR"
  },
  {
    name: "Dr. Serkan Islak",
    email: "serkan@kastamonu.edu.tr",
    institution: " Kastamonu Üniversitesi"
  },
  {
    name: "Dr. Hüseyin Çetin",
    email: "mhcetin@ktun.edu.tr",
    institution: "Konya Teknik Üniversitesi"
  },
  {
    name: "Dr. Ali Erçetin",
    email: "yukselakinay@yyu.edu.tr",
    institution: "Van Yüzüncü Yıl Üniversitesi"
  },
  {
    name: "Dr. Muhammed Elitaş",
    email: "muhammed.elitas@bilecik.edu.tr",
    institution: "Bilecik Şeyh Edebali Üniversitesi"
  },
  {
        name: "Dr. Savaş Öztürk",
        email: "savas.ozturk@cbu.edu.tr",
    institution: "Manisa Celal Bayar Üniversitesi"
  },
  {
    name: "Dr. Yusuf Polat",
    email: "yusuf.polat@erzurum.edu.tr",
    institution: "Erzurum Teknik Üniversitesi"
  },
];

const EnerjiAnabilimDalı: Editor[] = [
  {
    name: "Dr. Alperen Tozlu",
    email: "alperentozlu@bayburt.edu.tr",
    institution: "Bayburt Üniversitesi"
  }, 
  {
    name: "Dr. Fatih Uysal",
    email: "fatihuysal@subu.edu.tr",
    institution: "Sakarya U.B. Üniversitesi"
  },
];

const PolimerAnabilimDalı: Editor[] = [
  {
    name: "Dr. Mehmet Arif Kaya",
    email: "marifkaya@yalova.edu.tr",
    institution: "Yalova Üniversitesi"
  },
];

const GıdaOrmanveDoğaBilimleriAnabilimDalı: Editor[] = [
  {
    name: "Dr. Aydın Demir",
    email: "aydindemir@ktu.edu.tr",
    institution: "Karadeniz Teknik Üniversitesi"
  },
  {
    name: "Dr. Ali Toptaş",
    email: "atoptas34@gmail.com",
    institution: "İstanbul Teknik Üniversitesi"
  },
  {
    name: "Dr. Cemhan Doğan",
    email: "cemhan.dogan@bozok.edu.tr",
    institution: "Yozgat Bozok Üniversitesi"
  },
  {
    name: "Dr. Fatma Diğdem Tuncer",
    email: "fdigdemt@iuc.edu.tr",
    institution: "İstanbul Üniversitesi – Cerrahpaşa"
  },
];
const ElektrikElektronikMühendisliğiAnabilimDalı:Editor[] =[
    {
        name: "Dr. Mehmet D. Çalışır",
        email: "mehmetdurmus.calisir@erdogan.edu.tr",
        institution: "Recep Tayyip Erdoğan ÜniversitesiYozgat Bozok Üniversitesi"
      },
]


export default function NSJIPage() {
  return (
    <div>
      <PageHeader
        imageUrl="/images/demir-celik.jpg"
        title="NSJI - Doğa Bilimleri Dergisi"
      />
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-12">
        {/* Hakkında */}
        <section>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image src="/images/dergis.jpg" alt="ISI Natural Science Journal 2024" width={400} height={550} className="border border-gray-300 rounded-lg shadow" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#202b85] mb-4">Hakkında</h2>
              <p className="text-lg text-[#202b85] mb-4">
                DCE Doğa Bilimleri Dergisi, doğa bilimleri alanındaki özgün araştırmaların yayımlandığı hakemli, uluslararası ve ücretsiz bir dergidir. Dergimiz, yılda iki kez Temmuz ve Aralık aylarında düzenli olarak yayımlanmakta olup, bilim insanları için disiplinler arası bir bilgi paylaşım platformu sunmaktadır.<br/><br/>
                Dergi, 2020 yılında Journal of Steel Research and Development ismiyle yayın hayatına başlamış, 2024 Temmuz sayısından itibaren ISI-Doğa Bilimleri Dergisi adıyla yoluna devam etmektedir. İsmini genişleyen kapsama alanına uygun şekilde değiştiren dergimiz, doğa bilimleri alanındaki yenilikçi çalışmaları bilim dünyasına sunmayı sürdürmektedir.
              </p>
              <Link href="https://dergipark.org.tr/tr/pub/nsjisi" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#f97316] hover:bg-[#202b85] text-white font-bold py-3 px-8 rounded-lg mt-4 transition flex items-center gap-2">
                  Dergiye Erişin
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Amaç ve Kapsam */}
        <section>
          <h2 className="text-3xl font-bold text-[#202b85] mb-4">Amaç ve Kapsam</h2>
          <p className="text-lg text-[#202b85] mb-4">
            Temel mühendislik alanlarındaki hem deneysel hem de kuramsal çalışmaların yer aldığı dergimiz, mühendisliğin hızla gelişen alanlarına ilişkin makalelerin yayınına öncelik tanır ve disiplinler arası yöntem ve teknolojiler üzerine yoğunlaşmayı, mühendislik bilimlerindeki en güncel bilimsel ve teknolojik gelişmeleri araştırmacılara, mühendislere ve ilgili kitlelere ulaştırmayı hedefler.<br/><br/>
            Dergiye gönderilen bilimsel çalışmaların yayımlanmış veya poster sunum olarak başka yerde yayın için değerlendirme aşamasında bulunmaması gereklidir.<br/><br/>
            "Çelik Araştırma ve Geliştirme Dergisi" temel mühendislik konularını kapsayan bir dergidir. Dergi ulusal ve uluslararası düzeyde bilim, teknoloji ve mühendislik alanlarında orijinal bir araştırmayı bulgu ve sonuçlarıyla yansıtan ve bilime katkısı olan araştırma makalelerini veya yeterli sayıda bilimsel makaleyi tarayıp, konuyu bugünkü bilgi ve teknoloji düzeyinde özetleyen, değerlendirme yapan ve bulguları karşılaştırarak yorumlayan tarama makalelerini kabul etmektedir.
          </p>
        </section>
        {/* Son Sayılar */}
        <section>
          <RecentIssues />
        </section>
        {/* Dergi Kurulları */}
        <section>
          <h2 className="text-2xl font-bold text-[#202b85] mb-4">Dergi Kurulları</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Accordion title="Baş Editörler" items={basEditorler} />
            <Accordion title="Editör Kurulu" items={editorKurulu} />
          </div>
          <h2 className="text-2xl font-bold text-[#202b85] mb-4">Alan Editörleri</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Accordion title="Makine ve Malzeme Mühendisliği Anabilim Dalı" items={MakineveMalzemeMühendisliğiAnabilimDalı} />
            <Accordion title="Enerji Anabilim Dalı" items={EnerjiAnabilimDalı} />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Accordion title="Gıda, Orman ve Doğa Bilimleri Anabilim Dalı" items={GıdaOrmanveDoğaBilimleriAnabilimDalı} />
            <Accordion title="Polimer Anabilim Dalı" items={PolimerAnabilimDalı} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Accordion title="Elektrik Elektronik Mühendisliği Anabilim Dalı" items={ElektrikElektronikMühendisliğiAnabilimDalı} />
          </div>
        </section>
      </div>
    </div>
  );
}
