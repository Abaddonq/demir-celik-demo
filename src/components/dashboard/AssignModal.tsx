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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-2 sm:px-4">
      <div className="bg-white rounded-lg w-full max-w-md sm:max-w-lg p-4 sm:p-6 max-h-[90vh] overflow-y-auto shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {itemType === "department" ? "Departmanlar" : "Laboratuvarlar"}
          </label>
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {items.map((item, idx) => {
              const value = itemType === "department" ? item.id : item;
              const inputId = `${itemType}-checkbox-${value}`;
              return (
                <div key={value} className="flex items-start">
                  <input
                    type="checkbox"
                    id={inputId}
                    title={
                      itemType === "department"
                        ? `Departman: ${item.name}`
                        : `Laboratuvar: ${item}`
                    }
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-1"
                    checked={
                      itemType === "department"
                        ? selectedItems.includes(item.id)
                        : selectedItems.includes(item)
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedItems([...selectedItems, value]);
                      } else {
                        setSelectedItems(
                          selectedItems.filter((i) => i !== value)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={inputId}
                    className="ml-3 text-sm font-medium text-gray-700"
                  >
                    {itemType === "department" ? item.name : item}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            İptal
          </button>
          <button
            onClick={onAssign}
            disabled={isAssigning || selectedItems.length === 0}
            className={`w-full sm:w-auto px-4 py-2 rounded-md ${
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
