import { ThemeForm, LoadingState } from "@/lib/dashboardTypes";

export default function ThemeSettings({ 
  form, 
  setForm, 
  isLoading, 
  saveTheme, 
  toggleMode 
}: {
  form: ThemeForm;
  setForm: React.Dispatch<React.SetStateAction<ThemeForm>>;
  isLoading: LoadingState;
  saveTheme: () => void;
  toggleMode: () => void;
}) {
  const fonts = [
    "Inter", "Arial", "Roboto", "Georgia", 
    "Times New Roman", "Courier New", "Verdana"
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Tema Ayarları
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tema Modu
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={form.mode.toString()}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  mode: e.target.value === "true"
                }))}
              >
                <option value="false">Light Mode</option>
                <option value="true">Dark Mode</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Font Ailesi
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={form.fontFamily}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  fontFamily: e.target.value
                }))}
              >
                {fonts.map(font => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Font Boyutu (px)
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={form.fontSizeBase}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  fontSizeBase: e.target.value
                }))}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ana Renk
              </label>
              <div className="flex items-center">
                <input
                  type="color"
                  className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                  value={form.primaryColor}
                  onChange={(e) => setForm(prev => ({
                    ...prev,
                    primaryColor: e.target.value
                  }))}
                />
                <span className="ml-3 text-sm text-gray-600">
                  {form.primaryColor}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                İkincil Renk
              </label>
              <div className="flex items-center">
                <input
                  type="color"
                  className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                  value={form.secondaryColor}
                  onChange={(e) => setForm(prev => ({
                    ...prev,
                    secondaryColor: e.target.value
                  }))}
                />
                <span className="ml-3 text-sm text-gray-600">
                  {form.secondaryColor}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={saveTheme}
            disabled={isLoading.theme}
            className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading.theme
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading.theme ? "Kaydediliyor..." : "Tema Ayarlarını Kaydet"}
          </button>
          <button
            onClick={toggleMode}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {form.mode ? "Light Mode'a Geç" : "Dark Mode'a Geç"}
          </button>
        </div>
      </div>
    </div>
  );
}