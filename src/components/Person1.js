export default function Person1() {
  return (

<div className="flex justify-end p-6">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-3
    transition-all duration-300 hover:bg-orange-100 hover:shadow-lg hover:scale-105 transform">
    
    <img
      src="/images/person1.png"
      alt="Ahmet SONGÜL"
      className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover object-top
        transition-all duration-300 hover:border-orange-500"
    />
    <h2 className="text-xl font-bold text-blue-900">Ahmet SONGÜL</h2>
    <p className="text-gray-500">Tekniker</p>
    <p className="text-sm text-gray-600">0 (370) 418 6043 / 6043</p>
    <p className="text-sm text-blue-700">ahmetsongul@karabuk.edu.tr</p>
  </div>
</div>

);
}