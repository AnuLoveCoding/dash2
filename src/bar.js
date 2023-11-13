import React, { useState } from "react";
import SmallComponent from "./SmallComponent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function Appp() {
	const [toggleDark, settoggleDark] = useState(false);
	const myTheme = createMuiTheme({

		// Theme settings
		palette: {
			type: toggleDark ? "dark" : "light",
		},
	});

	return (

		// Wrapping code in ThemeProvider
		<ThemeProvider theme={myTheme}>
			<SmallComponent toggleDark={toggleDark}
				settoggleDark={settoggleDark} />
		</ThemeProvider>
	);
}

export default Appp;
