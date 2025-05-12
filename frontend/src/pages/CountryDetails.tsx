import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Country } from "../types";
import CountryDetailsCard from "../components/CountryDetailsCard";
import { GET_COUNTRIES } from "../api/queries";

function CountryDetails() {
  const { code } = useParams<{ code: string }>();
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const country: Country | undefined = data?.countries.find(
    (c: Country) => String(c.code) === code
  );

  return (
    <div className="flex flex-col items-center pt-10 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">Quel beau pays !!</h1>
      {country ? (
        <CountryDetailsCard {...country} />
      ) : (
        <div>Pays non trouvé</div>
      )}
      <div className="flex gap-6 mt-6">
        <Link to="/" className="text-blue-600 hover:underline">Retour</Link>
        <Link to="/country-form" className="text-blue-600 hover:underline">Ajouter un pays</Link>
      </div>
    </div>
  );
}

export default CountryDetails;