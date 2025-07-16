export default function AdminTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const tabs = [
    { id: "tema", label: "Tema Ayarları" },
    { id: "departman", label: "Departmanlar" },
    { id: "personel", label: "Personel Yönetimi" },
    { id: "moderator", label: "Bekleyen Moderatörler" },
    { id: "haberler", label: "Haber Yönetim Paneli" },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="flex whitespace-nowrap border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-3 font-medium text-sm transition-all duration-200 ${
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
    </div>
  );
}
