import { Staff, Department, LoadingState } from "@/lib/dashboardTypes";

export default function StaffManager({
  staffList,
  isLoading,
  departments,
  laboratoryList,
  handleEditStaff,
  handleDeleteStaff,
  setAssignDeptStaffId,
  setAssignLabStaffId,
  setSelectedDeptIds,
  setSelectedLabs,
  isAcademicStaff,
}: {
  staffList: Staff[];
  isLoading: LoadingState;
  departments: Department[];
  laboratoryList: string[];
  handleEditStaff: (staff: Staff) => void;
  handleDeleteStaff: (id: number) => void;
  setAssignDeptStaffId: (id: number) => void;
  setAssignLabStaffId: (id: number) => void;
  setSelectedDeptIds: (ids: number[]) => void;
  setSelectedLabs: (labs: string[]) => void;
  isAcademicStaff: (staff: Staff) => boolean;
}) {
  return (
    <div>
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Personel Listesi
        </h3>
        {isLoading.staff ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        ) : staffList.length === 0 ? (
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="mt-4 text-gray-500">Henüz personel eklenmemiş</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ad Soyad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ünvan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    İletişim
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Departmanlar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {staffList.map((staff) => {
                  const isAcademic = isAcademicStaff(staff);
                  return (
                    <tr key={staff.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {staff.name} {staff.surname}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {staff.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="font-medium">{staff.email}</div>
                        <div>{staff.phone || "-"}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {staff.departments
                          ?.map((dept) => dept.name)
                          .join(", ") || "Belirtilmemiş"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setAssignDeptStaffId(staff.id);
                              setSelectedDeptIds(
                                staff.departments?.map((d) => d.id) || []
                              );
                            }}
                            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                          >
                            Departman Ata
                          </button>
                          <button
                            onClick={() => handleEditStaff(staff)}
                            className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                          >
                            Düzenle
                          </button>
                          <button
                            onClick={() => handleDeleteStaff(staff.id)}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Sil
                          </button>
                          {isAcademic && (
                            <button
                              onClick={() => {
                                setAssignLabStaffId(staff.id);
                                const labs = Array.isArray(
                                  staff.responsible_labs
                                )
                                  ? staff.responsible_labs
                                  : [];
                                const validLabs = labs.filter((lab: string) =>
                                  laboratoryList.includes(lab)
                                );
                                setSelectedLabs(validLabs);
                              }}
                              className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                            >
                              Laboratuvar Ata
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
