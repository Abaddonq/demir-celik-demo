export default function AssignModal({
  title,
  items,
  selectedItems,
  setSelectedItems,
  onAssign,
  onCancel,
  isAssigning,
  itemType,
}: {
  title: string;
  items: any[];
  selectedItems: any[];
  setSelectedItems: (items: any[]) => void;
  onAssign: () => void;
  onCancel: () => void;
  isAssigning: boolean;
  itemType: "department" | "lab";
}) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>

        <div className="mb-4 max-h-80 overflow-y-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {itemType === "department" ? "Departmanlar" : "Laboratuvarlar"}
          </label>
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={itemType === "department" ? item.id : item}
                className="flex items-start"
              >
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    checked={
                      itemType === "department"
                        ? selectedItems.includes(item.id)
                        : selectedItems.includes(item)
                    }
                    onChange={(e) => {
                      const value = itemType === "department" ? item.id : item;
                      if (e.target.checked) {
                        setSelectedItems([...selectedItems, value]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter((i) => i !== value)
                        );
                      }
                    }}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">
                    {itemType === "department" ? item.name : item}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            İptal
          </button>
          <button
            onClick={onAssign}
            disabled={isAssigning || selectedItems.length === 0}
            className={`px-4 py-2 rounded-md ${
              isAssigning || selectedItems.length === 0
                ? "bg-blue-300 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isAssigning ? "Atanıyor..." : "Ata"}
          </button>
        </div>
      </div>
    </div>
  );
}
