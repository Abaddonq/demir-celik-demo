
export const EditorTips = () => (
  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
    <div className="flex items-start">
      <svg
        className="h-5 w-5 text-blue-400 mr-2 mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      <div>
        <h3 className="text-sm font-medium text-blue-800">İpuçları</h3>
        <ul className="mt-2 text-sm text-blue-700 list-disc pl-5 space-y-1">
          <li>Başlık ve içerik zorunlu alanlardır</li>
          <li>Görselleri sürükleyip bırakarak ekleyebilirsiniz</li>
          <li>Değişiklikler otomatik olarak kaydedilir</li>
        </ul>
      </div>
    </div>
  </div>
);
