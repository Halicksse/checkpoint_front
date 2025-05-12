import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../api/queries";
import CountryCard from "../components/CountryCard";
import CountryForm from "../components/CountryForm";
import { Country } from "../types";


export function HomePage() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-6">
    <CountryForm />
    <div className="flex flex-wrap gap-4 justify-center">
      {data.countries.map((c: Country) => (
        <CountryCard key={c.code} {...c} />
      ))}
    </div>
  </div>
);
}

export default HomePage;