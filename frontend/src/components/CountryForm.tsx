import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../api/queries";
import { ContinentsData, NewCountryInput } from "../types";
import { ADD_COUNTRY } from "../api/mutations";

export function CountryForm() {
  const { register, handleSubmit, reset } = useForm<NewCountryInput>();
  const { data } = useQuery<ContinentsData>(GET_CONTINENTS);
  const [addCountry, { loading }] = useMutation(ADD_COUNTRY);

  const onSubmit = async (formData: NewCountryInput) => {
    try {
      await addCountry({ variables: { data: formData } });
      reset();
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err);
    }
  };

  return (
    <div className="w-full flex justify-center py-8">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 border border-gray-300 rounded-md p-4 flex flex-col gap-4 max-w-6xl mx-auto mt-8
md:flex-row md:items-end md:gap-6"
    >
      <div className="flex flex-col flex-1">
        <label htmlFor="name" className="text-sm font-medium mb-1">Nom</label>
        <input
          id="name"
          {...register("name")}
          className="border border-gray-300 rounded-md p-2 bg-white"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label htmlFor="emoji" className="text-sm font-medium mb-1">Emoji</label>
        <input
          id="emoji"
          {...register("emoji")}
          className="border border-gray-300 rounded-md p-2 bg-white"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label htmlFor="code" className="text-sm font-medium mb-1">Code</label>
        <input
          id="code"
          {...register("code")}
          className="border border-gray-300 rounded-md p-2 bg-white"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-[180px]">
        <label htmlFor="continent" className="text-sm font-medium mb-1">Continent</label>
        <select
          id="continent"
          {...register("continent")}
          className="border border-gray-300 rounded-md p-2 bg-white"
        >
          <option value="">Choisir...</option>
          {data?.continents?.map((continent) => (
            <option key={continent.id} value={continent.name}>
              {continent.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-sky-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-700 transition text-lg h-[49px] ml-2"
        style={{ minWidth: "70px" }}
      >
        Ajouter
      </button>
    </form>
    </div>
  );
}

export default CountryForm;

