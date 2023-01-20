"use client";

import { createGlobalStyle } from "styled-components";

// @ts-ignore
import common from "./common.css";

const GlobalStyleComponents = createGlobalStyle`
	${common}
`;

const GlobalStyle = () => {
	return (
		<>
			<GlobalStyleComponents />
		</>
	);
};

export default GlobalStyle;
