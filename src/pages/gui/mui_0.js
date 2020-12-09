import React from "react"
import Layout from "../../components/layout"

import Button from "@material-ui/core/Button"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"

import JuanitaTTF from "../../../fonts/Juanita ITC.ttf"

const juanita_itc = {
  fontFamily: "Juanita ITC",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Juanita ITC'),
    url(${JuanitaTTF}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "Juanita ITC, Arial",
    fontSize: 60,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [juanita_itc],
      },
    },
  },
})

export default function MUISimple() {
  return (
    <div>
      <Layout title="MATERIAL UI" link="false"></Layout>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" fullWidth="true">
          Back home
        </Button>
      </ThemeProvider>
    </div>
  )
}
