import { createContext, useContext } from "react";
import data from "../../data.json";
import { useState } from "react";

const MyContext = createContext<any | null>("country");

const getContext = () => useContext(MyContext);

type Iprops = {
	children: React.ReactNode
}

const Context: React.FC<Iprops> = ({ children }) => {
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
