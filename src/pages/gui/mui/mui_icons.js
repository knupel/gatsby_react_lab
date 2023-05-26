import React from "react"
import Layout from "../../../components/struct/layout"

import { Badge }  from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { red, cyan } from '@mui/material/colors';
// https://mui.com/material-ui/customization/color/


// dans la palette, l'élément main ne doit pas être supprimer
// for light, dark et constractText. IT's used on a specific case of MUI
// car c'est celui qui est cherché par défaut.
const theme = createTheme({
  palette: {
    primary: {
      light: red[200],
      main: red[500],
      dark: red[900],
      contrastText: red[50],
    },
    secondary: {
      light: cyan[200],
      main: cyan[400],
      dark: cyan[900],
      contrastText: cyan[50],
    },
		truc: {
      aaa: "rgb(0, 255, 0)",
      main: "rgb(255, 0, 0)",
      bonbon: "rgb(255, 0, 255)",
      zzz: "rgb(255, 255, 0)",
    },
  }
});

export default function MuiPicto() {
	const my_color = red[900]; // #f44336
  return (
		<div>
			<Layout title="M[aterial]UI: Badge and Icons"></Layout>
			<ThemeProvider theme={theme}>
				<Badge badgeContent={12} color="truc">
					<a href="https://github.com/knupel" target="_blank">
						<GitHubIcon sx={{fontSize:50, color: 'truc.bonbon'}}/>
					</a>
				</Badge>
				<a href="https://www.instagram.com/knupel_art/" target="_blank">
					<InstagramIcon color='secondary' sx={{fontSize:100}}/>
				</a>
			</ThemeProvider>
		</div>
  );
}

