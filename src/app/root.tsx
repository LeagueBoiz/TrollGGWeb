"use client";

import GlobalStyle from "@/styles/GlobalStyle";
import React from "react";
import store from "@/redux/store";
import { Provider } from "react-redux";

const RootComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Provider store={store}>{children}</Provider>
		</>
	);
};

export default RootComponent;
