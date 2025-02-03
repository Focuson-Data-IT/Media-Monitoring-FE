import { createContext, useContext, useState } from "react";

const DrawerContext = createContext({isDrawerActive: false, toggleDrawer: () => {}});

export const DrawerProvider = ({ children }) => {
	const [isDrawerActive, setIsDrawerActive] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerActive((prev) => !prev);
	};

	return (
		<DrawerContext.Provider value={{ isDrawerActive, toggleDrawer }}>
			{children}
		</DrawerContext.Provider>
	);
};

export const useDrawer = () => {
	return useContext(DrawerContext);
};
