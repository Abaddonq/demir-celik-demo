'use client'; 

import React from 'react';
import InfoBox from '@/components/InfoBox'; 

const FiyatListesiPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      {/* İndirme Butonu */}
      <a
        href="/pdfs/DCE_Laboratuvar_Yeni_Ucret_Cizelgesi_14.02.20252.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center mb-8"
      >
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow w-full max-w-sm md:max-w-none">
          Fiyat Listesini İndirmek İçin Tıklayınız
        </button>
      </a>

      {/* InfoBox'lar - Mobil: Dikey, Masaüstü: Yatay */}
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full mb-12 gap-4">
        <InfoBox
          image="/images/lab.jpg"
          title="HASSAS ÖLÇÜM VE TESTLER İÇİN DOĞRU YERDESİNİZ"
          description="Geleceği inşa etmek için teknolojiye yatırım yaparken, en iyi test ve ölçüm tekliflerini oluşturmak için sürekli olarak uzman ve akademisyenlerimiz ile sizin için çalışıyoruz."
        />
        <InfoBox          
          image="/images/Laboratuvarlar.png"
          title="KALİTELİ TEST HİZMETLERİ"
          description="Ürünlerinizin kalitesini kanıtlamak ve üretiminizi optimize etmek için size yüksek kaliteli test hizmetleri sunan güvenilir bir iş ortağı!"
        />
      </div>

      {/* PDF Görüntüleyici */}
      <div className="w-full max-w-4xl h-[400px] md:h-[600px] bg-white dark:bg-gray-800 rounded shadow overflow-hidden">
        <iframe
          src="/pdfs/DCE_Laboratuvar_Yeni_Ucret_Cizelgesi_14.02.20252.pdf"
          title="Fiyat Listesi PDF"
          width="100%"
          height="100%"
          className="w-full h-full border-0"
        />
      </div>
      <p className="mt-4 text-gray-500 dark:text-gray-300 text-sm">Ctrl+F tuş kombinasyonunu kullanarak pdf'de arama yapabilirsiniz</p>

      {/* Amacımız ve Altıgen Kutular */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-16 w-full max-w-6xl px-4">
        {/* Sol: Altıgen Kutular */}
        <div className="flex flex-col gap-4 items-center md:items-end mb-8 md:mb-0">
          <div className="w-44 h-40 bg-[#f97316] text-white flex flex-col items-center justify-center rounded-[2rem] shadow-lg mb-2" style={{clipPath:'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
            <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="font-bold text-center text-sm">Sıkı Kalite<br/>Uygulamaları</span>
          </div>
          <div className="w-44 h-40 bg-[#202b85] text-white flex flex-col items-center justify-center rounded-[2rem] shadow-lg mb-2" style={{clipPath:'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
            <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"/><path d="M12 7v.01"/></svg>
            <span className="font-bold text-center text-sm">Yeni, Gelişmiş<br/>Araçlar</span>
          </div>
          <div className="w-44 h-40 bg-cyan-300 text-[#202b85] flex flex-col items-center justify-center rounded-[2rem] shadow-lg border border-[#202b85]" style={{clipPath:'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
            <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17v-1a4 4 0 014-4h0a4 4 0 014 4v1"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="font-bold text-center text-sm">Özelleştirilmiş<br/>Laboratuvar<br/>Çözümleri</span>
          </div>
        </div>
        
        {/* Sağ: Amacımız Metni */}
        <div className="flex-1 md:ml-8 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#202b85] mb-4 text-center md:text-left">Amacımız</h2>
          <div className="text-sm md:text-lg text-[#202b85] font-medium leading-relaxed">
            Karabük Üniversitesi Demir Çelik Enstitüsü'nün (KDÇE) amacı; Türkiye ve dünyada demir çelik üretimi konusunda yeni teknolojilerin geliştirilmesine, ürün kalitesinin artırılmasına, katma değeri yüksek vasıflı çelik üretilmesine, üretim atıklarının değerlendirilmesine, demir çelik tesislerindeki verimliliğin artırılmasına ve demir çelik üretiminde yerli hammadde ve cevherlerin etkili ve verimli kullanımına yönelik araştırmalar için gerekli bilimsel ortamı sağlamanın yanı sıra, ülkemizde üretilen ürünlerin uluslararası düzeyde kabul gören akreditasyon koşullarında kalite kontrol testlerinin yapılmasına yönelik alt yapı oluşturmak, üretici/kullanıcı ve bu alanlarda araştırma yapan kamu ve özel sektör kuruluşları ile işbirliği yaparak bilimsel araştırmalar yapmak, yaptırmak, koordine etmek ve Türkiye'nin demir çelik alanındaki strateji ve politikalarına katkı sağlamaktır.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiyatListesiPage;