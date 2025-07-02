import { Department, LoadingState } from "@/lib/dashboardTypes";

export default function DepartmentManager({
  departments,
  isLoading,
  newDeptName,
  setNewDeptName,
  addDepartment,
  editDeptId,
  editDeptName,
  setEditDeptName,
  updateDepartment,
  setEditDeptId,
  deleteDepartment
}: {
  departments: Department[];
  isLoading: LoadingState;
  newDeptName: string;
  setNewDeptName: (name: string) => void;
  addDepartment: () => void;
  editDeptId: number | null;
  editDeptName: string;
  setEditDeptName: (name: string) => void;
  updateDepartment: () => void;
  setEditDeptId: (id: number | null) => void;
  deleteDepartment: (id: number) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Departman Yönetimi
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Yeni Departman Ekle
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Departman adı"
            value={newDeptName}
            onChange={(e) => setNewDeptName(e.target.value)}
          />
          <button
            onClick={addDepartment}
            disabled={isLoading.departments || !newDeptName.trim()}
            className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading.departments || !newDeptName.trim()
                ? "bg-blue-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading.departments ? "Ekleniyor..." : "Ekle"}
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Departman Listesi
        </h3>
        {isLoading.departments ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        ) : departments.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <p className="mt-4 text-gray-500">Henüz departman eklenmemiş</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Departman Adı
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {departments.map((dept) => (
                  <tr key={dept.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dept.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {editDeptId === dept.id ? (
                        <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={editDeptName}
                        onChange={(e) => setEditDeptName(e.target.value)}
                        placeholder="Departman adı"
                        title="Departman adı"
                      />
                      ) : (
                        dept.name
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {editDeptId === dept.id ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={updateDepartment}
                            disabled={!editDeptName.trim()}
                            className={`px-3 py-1 rounded ${
                              !editDeptName.trim()
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                          >
                            Kaydet
                          </button>
                          <button
                            onClick={() => setEditDeptId(null)}
                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                          >
                            İptal
                          </button>
                        </div>
                      ) : (
                        <div className="flex space-x-3">
                          <button
                            onClick={() => {
                              setEditDeptId(dept.id);
                              setEditDeptName(dept.name);
                            }}
                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                          >
                            Düzenle
                          </button>
                          <button
                            onClick={() => deleteDepartment(dept.id)}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Sil
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}