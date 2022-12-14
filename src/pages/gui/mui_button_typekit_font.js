import React from "react"
import Layout from "../../components/struct/layout"
// GATSBY
import { Link } from "gatsby"

// MATERIAL UI
// function Mui

// Component Mui
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider} from "@mui/material/styles"
// import { styled } from "@mui/material/styles"
import { styled } from "@mui/system"
// import { withStyles } from "@mui/styles"

// https://www.gatsbyjs.com/docs/using-web-fonts/
// if id is define in .env look https://www.gatsbyjs.com/docs/environment-variables/  for the deployment and build part
// set the secret on netlify or in your github project setting

// https://www.gatsbyjs.com/docs/gatsby-link/

const theme = createTheme({
  typography: {
    fontFamily: "aglet-mono, mono", // font typekit project for knupel website
    // fontFamily: "Metalista-web, serif",
    fontSize: 20,
  },
})



const SuperButton = styled(Button)({
  color: 'magenta',
  backgroundColor: 'yellow',
  padding: 8,
  borderRadius: 4,
  fontSize:40,
  fontFamily: "aglet-mono, mono", // font typekit project for knupel website

});




export default function MUISimple() {
  return (
    <div>
      <Layout
        title="Material UI V4: Button setting with Typekit font"
        link="false"
      ></Layout>
      <ThemeProvider theme={theme}>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            fullWidth="true"
            textTransform="none"
          >
            Quick Button alltime in upper case to back home
          </Button>
        </Link>
        <Link to="/">
        <SuperButton variant="contained" color="primary" fullWidth="true">
          Button make with passion to back home
        </SuperButton>
      </Link>
      </ThemeProvider>
      
    </div>
  )
}
