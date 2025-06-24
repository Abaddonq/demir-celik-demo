import { useState } from 'react';

const editors = [
  {
    name: "Dr. Recep Demirsöz",
    email: "recepdemirsoz@karabuk.edu.tr",
    institution: "Karabük Üniversitesi, Demir Çelik Enstitüsü, TR.",
  },
  {
    name: "Dr. Safa Polat",
  },
  {
    name: "Dr. Erhan Kayabaşı",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (!editors[index].email) return; // Bilgi yoksa açılmasın
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto mt-10 rounded overflow-hidden shadow">
      {/* Başlık */}
      <div className="bg-orange-600 text-white font-bold p-4">
        Baş Editörler
      </div>

      {/* Liste */}
      {editors.map((editor, index) => {
        const isOpen = openIndex === index;
        const hasInfo = !!editor.email;

        return (
          <div key={index} className="border-t">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 font-semibold text-left hover:bg-gray-100"
            >
              <span className={hasInfo ? "text-red-600" : "text-blue-900"}>
                {editor.name}
              </span>
              <span>
                {hasInfo ? (isOpen ? "➖" : "➕") : "➕"}
              </span>
            </button>

            {isOpen && hasInfo && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                <div>{editor.email}</div>
                <div>{editor.institution}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
