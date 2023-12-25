import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const DataContext = createContext()

export const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get('https://658169023dfdd1b11c4332d4.mockapi.io/items');
				setData(response.data)
			} catch (err) {
				console.error(err);
			}
		}

		getData();
	}, [])

	return (
		<DataContext.Provider value={data}>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => {
	return useContext(DataContext)
}
