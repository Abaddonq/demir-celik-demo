import React from 'react'
import PageHeader from '@/components/PageHeader';
import CustomButton from '@/components/CustomButton';
import Accordion from '@/components/Accordion';
const Page = () => {
  return (
    
    <div className="flex flex-wrap gap-6 justify-center">
      <PageHeader
        imageUrl="/images/Laboratuvarlar.png"
        title="Hizmet İşleyiş Süreci"
      />
         <div>
          <CustomButton label="Labsis" url="https://labsis.karabuk.edu.tr/" />
         </div>
         <div className="w-full flex justify-center mt-6">
           <Accordion
             title="Hizmet İşleyiş Süreci"
             items={[
               {
                 name: 'Başvuru',
                 email: 'Başvurular labsis üzerinden alınır.',
                 institution: (
                   <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', minWidth: 0, fontSize: 13, height: 36 }}>
                     <CustomButton
                       label="Labsis"
                       url="https://labsis.karabuk.edu.tr/"
                     />
                   </div>
                 ),
               },
               {
                 name: 'Hizmet Bedelini Ödenmesi',
               institution:  `• Hizmet bedelinin belirtilen Üniversite Döner Sermaye İşletmesi Müdürlüğü banka hesabına yatırılması ve ilgili dekont veya fatura fotokopisinin Demir Çelik Enstitüsü'ne fakslanmasını veya elden verilmesini takiben analize başlanabilmektedir.
Banka IBAN Numaramız:
TR440001000425978266885001
(Ziraat Bankası Karabük Şubesi)`,
                  
               },
               
               {
                 name: 'Raporlama',
                 institution: (
                   <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                     <li>Test ve analiz sonuçları ürün için bir kalite sertifikası niteliği taşımamaktadır.</li>
                     <li>Başvuru formunda istenen test / analizler için sadece bir adet rapor düzenlenmektedir. Birden fazla numune için ayrı ayrı rapor isteniyorsa, istek yazısında bunun belirtilmesi gerekmektedir.</li>
                     <li>Analiz raporu ve fatura başvuru formunda belirtilen adrese gönderilmektedir.</li>
                     <li>Kargo bedeli müşteriye aittir.</li>
                   </ul>
                 ),
               },
             ]}
           />
         </div>
      </div>
    
   
  )
}

export default Page


