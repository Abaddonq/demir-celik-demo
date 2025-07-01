// 'use client';

// import { useState } from 'react';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// const faqs = [
//   {
//     question: 'Dinamik Test Lab. nedir ve hangi tür testler burada gerçekleştirilir?',
//     answer: 'Dinamik Test Laboratuvarı, malzemelerin yorulma, darbeye dayanıklılık ve dinamik yük altında davranışlarını test eder.',
//   },
//   {
//     question: 'Kalıntı Gerilme Lab. ne tür hizmetler sunar ve hangi endüstriler bu hizmetlerden faydalanır?',
//     answer: 'Kalıntı Gerilme Laboratuvarı, kaynak sonrası gerilmeleri ölçer ve otomotiv, savunma, enerji sektörlerine hizmet verir.',
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white py-16 px-6 md:px-24">
//       <h2 className="text-3xl font-bold text-blue-900 mb-4">Sık Sorulan Sorular</h2>
//       <p className="text-gray-500 max-w-2xl mb-10">
//         Demir Çelik Enstitüsü hakkında sıkça sorulan sorular, enstitünün sunduğu hizmetlerden nasıl yararlanılacağından,
//         laboratuvar testlerinin çeşitlerine ve başvuru sürecine kadar geniş bir yelpazeyi kapsar.
//       </p>
//       <div className="space-y-6 border-t border-blue-900 pt-6">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-b pb-4">
//             <button
//               onClick={() => toggle(index)}
//               className="flex items-center justify-between w-full text-left text-blue-900 font-semibold text-lg"
//             >
//               <span className="flex items-center gap-3">
//                 <span className="bg-blue-900 text-white rounded-full p-1">
//                   {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
//                 </span>
//                 {faq.question}
//               </span>
//             </button>
//             {openIndex === index && (
//               <div className="mt-3 text-gray-600 text-base pl-8 pr-2">{faq.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useTheme } from '@/app/context/themeContext'; // ✅ Add this line

const faqs = [
  {
    question: 'Dinamik Test Lab. nedir ve hangi tür testler burada gerçekleştirilir?',
    answer: 'Dinamik Test Laboratuvarı, malzemelerin yorulma, darbeye dayanıklılık ve dinamik yük altında davranışlarını test eder.',
  },
  {
    question: 'Kalıntı Gerilme Lab. ne tür hizmetler sunar ve hangi endüstriler bu hizmetlerden faydalanır?',
    answer: 'Kalıntı Gerilme Laboratuvarı, kaynak sonrası gerilmeleri ölçer ve otomotiv, savunma, enerji sektörlerine hizmet verir.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme(); // ✅ Get theme from context

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-white py-16 px-6 md:px-24"
      style={{ fontFamily: theme.fontFamily }} // ✅ Apply font
    >
      <h2
        className="text-3xl font-bold mb-4"
        style={{ color: theme.primaryColor }} // ✅ Apply dynamic heading color
      >
        Sık Sorulan Sorular
      </h2>
      <p className="text-gray-500 max-w-2xl mb-10">
        Demir Çelik Enstitüsü hakkında sıkça sorulan sorular, enstitünün sunduğu hizmetlerden nasıl yararlanılacağından,
        laboratuvar testlerinin çeşitlerine ve başvuru sürecine kadar geniş bir yelpazeyi kapsar.
      </p>
      <div
        className="space-y-6 pt-6 border-t"
        style={{ borderColor: theme.primaryColor }} // ✅ Dynamic border color
      >
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left font-semibold text-lg"
              style={{ color: theme.primaryColor }} // ✅ Dynamic question color
            >
              <span className="flex items-center gap-3">
                <span
                  className="text-white rounded-full p-1"
                  style={{ backgroundColor: theme.primaryColor }} // ✅ Dynamic icon background
                >
                  {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </span>
                {faq.question}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-3 text-gray-600 text-base pl-8 pr-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
