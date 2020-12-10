import React from "react"
import Layout from "../../components/layout"

import Button from "@material-ui/core/Button"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
// import CssBaseline from "@material-ui/core/CssBaseline"
// import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"

// https://www.gatsbyjs.com/docs/using-web-fonts/
// if id is define in .env look https://www.gatsbyjs.com/docs/environment-variables/  for the deployment and build part

// const typekit_font = {
//   fontFamily: "Malaga OTCE Bold",
//   // fontFamily: "metalista-web, Malaga OTCE Bold",
//   fontWeight: 400,
//   fontDisplay: "auto",
//   src: `
//   `,
// }

const zero_style = createMuiTheme({
  typography: {
    fontFamily: ["Malaga", "Metalista-web", "serif"],
    fontSize: 60,
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [typekit_font],
  //     },
  //   },
  // },
})

// zero_style.typography.h3 = {
//   fontSize: 20,
//   },
// }

// zero_style.typography.h2 = {
//   fontSize: 20,
//   },
// }

zero_style.typography.h1 = {
  fontSize: 300,
}

export default function MUISimple() {
  return (
    <div>
      <Layout title="TRY to design something" link="true"></Layout>
      <ThemeProvider theme={zero_style}>
        <Button variant="contained" color="primary" fullWidth="true">
          Zero style
        </Button>
        <Button variant="contained" color="primary" fullWidth="true">
          One style
        </Button>
        <Typography variant="h1">machin bidule</Typography>
      </ThemeProvider>
    </div>
  )
}
