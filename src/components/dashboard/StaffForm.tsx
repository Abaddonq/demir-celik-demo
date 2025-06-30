import Image from "next/image";
import { Staff } from "@/lib/dashboardTypes";

export default function StaffForm({
  newStaff,
  setNewStaff,
  selectedDeptIds,
  setSelectedDeptIds,
  previewImage,
  handleImageChange,
  handleAddStaff,
  isLoading,
  editStaffId,
  handleCancelEdit,
}: {
  newStaff: Omit<
    Staff,
    "id" | "departments" | "responsible_labs" | "image_url"
  >;
  setNewStaff: React.Dispatch<
    React.SetStateAction<
      Omit<Staff, "id" | "departments" | "responsible_labs" | "image_url">
    >
  >;
  selectedDeptIds: number[];
  setSelectedDeptIds: React.Dispatch<React.SetStateAction<number[]>>;
  previewImage: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddStaff: (e: React.FormEvent) => void;
  isLoading: { staff: boolean };
  editStaffId: number | null;
  handleCancelEdit: () => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Personel Yönetimi
      </h2>

      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          {editStaffId ? "Personel Düzenle" : "Yeni Personel Oluştur"}
        </h3>
        <form onSubmit={handleAddStaff} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ad*
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Personel adı"
                value={newStaff.name}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Soyad*
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Personel soyadı"
                value={newStaff.surname}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, surname: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ünvan*
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ünvan"
                value={newStaff.title}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                value={newStaff.email}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Telefon"
                value={newStaff.phone}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Personel Fotoğrafı
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="upload-photo"
                />
                <label
                  htmlFor="upload-photo"
                  className="cursor-pointer inline-block px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Fotoğraf Yükle
                </label>
                {previewImage && (
                  <div className="relative h-16 w-16">
                    <Image
                      src={previewImage}
                      alt="Önizleme"
                      fill
                      className="rounded object-cover border border-gray-300"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {editStaffId ? (
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isLoading.staff}
                className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isLoading.staff
                    ? "bg-blue-400 cursor-not-allowed text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isLoading.staff ? "Kaydediliyor..." : "Kaydet"}
              </button>
              <button
                type="button"
                disabled={isLoading.staff}
                onClick={handleCancelEdit}
                className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                İptal
              </button>
            </div>
          ) : (
            <button
              type="submit"
              disabled={isLoading.staff}
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading.staff
                  ? "bg-blue-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isLoading.staff ? "Oluşturuluyor..." : "Personel Oluştur"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
