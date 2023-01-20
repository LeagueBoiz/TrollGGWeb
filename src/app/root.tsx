import GlobalStyle from "@/styles/GlobalStyle";
import React from "react";

const RootComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
};

export default RootComponent;
