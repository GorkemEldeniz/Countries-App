import { createContext, useContext } from "react";
import data from "../../data.json";
import { useState } from "react";

const MyContext = createContext("country");

const getContext = () => useContext(MyContext);

const Context = ({ children }) => {
	const [countries, setCountries] = useState(data);
	const [selectedRegion, setSelectedRegion] = useState("Filter by region");
	const [search, setSearch] = useState("");

	return (
		<MyContext.Provider
			value={{
				countries,
				setCountries,
				selectedRegion,
				setSelectedRegion,
				search,
				setSearch,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export { Context, getContext };
