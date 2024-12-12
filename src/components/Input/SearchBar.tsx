"use client";
interface SearchBarProps {
  handleSearch: (city: string) => void;
  handleCity: (cityValue: string) => void;
  city: string;
}

export default function SearchBar({
  handleCity,
  city,
  handleSearch,
}: SearchBarProps) {
  return (
    <div className="flex justify-center w-full mt-6">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Digite para buscar..."
          className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          value={city}
          onChange={(e) => handleCity(e.target.value)}
        />
        <button
          onClick={() => handleSearch(city)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-300"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
