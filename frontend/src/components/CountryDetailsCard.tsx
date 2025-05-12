import { Country } from "../types";

export default function CountryDetailsCard({ name, emoji, continent }: Country) {
  return (
    <div className="p-6 border rounded-md bg-white flex flex-col items-center gap-4">
      <span className="text-7xl mb-4">{emoji}</span>
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      {continent && (
        <div className="text-gray-600 text-lg font-medium">{continent.name}</div>
      )}
    </div>
  );
}