export const NewsInfoForm = ({
  title,
  setTitle,
  description,
  setDescription,
}: {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
}) => (
  <div className="bg-white rounded-lg shadow-sm border p-6">
    <h2 className="text-lg font-medium text-gray-900 mb-4">Haber Bilgileri</h2>
    <div className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Başlık*
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Haber başlığını girin"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Kısa Açıklama
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Haberin kısa açıklamasını girin (160 karakter)"
          rows={3}
          maxLength={160}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-xs text-gray-500 mt-1 text-right">
          {description.length}/160 karakter
        </p>
      </div>
    </div>
  </div>
);
