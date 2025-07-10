export default function AdminTabs({ 
  activeTab, 
  setActiveTab 
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const tabs = [
    { id: "tema", label: "Tema Ayarları" },
    { id: "departman", label: "Departmanlar" },
    { id: "personel", label: "Personel Yönetimi" },
    { id: "moderator", label: "Bekleyen Moderatörler" },
    { id: "haberler", label: "Haber Yonetim Paneli" },
  ];

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-4 py-3 font-medium text-sm ${
            activeTab === tab.id
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}