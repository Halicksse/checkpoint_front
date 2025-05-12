import { useNavigate } from "react-router-dom";
import { Country } from "../types";


export default function CountryCard({ code, name, emoji }: Country) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/country/${code}`);
    }

    return (
        <div
            onClick={handleClick}
            className="md:w-40 md:h-32 w-20 h-25 flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
        >
            <div className="text-4xl">{emoji}</div>
            <h2 className="text-lg font-bold">{name}</h2>
        </div>
    );
}