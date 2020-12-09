import React from "react"
import Layout from "../../components/layout"

import Button from "@material-ui/core/Button"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"

import TokyoOneSolidOTF from "../../../fonts/Tokyo-OneSolid.otf"
import JuanitaITCTTF from "../../../fonts/Juanita ITC.ttf"

const tokyo_one_solid = {
  fontFamily: "TokyoOneSolid",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Tokyo-OneSolid'),
    url(${TokyoOneSolidOTF}) format('opentype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const juanita_itc = {
  fontFamily: "Juanita ITC",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Juanita ITC'),
    url(${JuanitaITCTTF}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const theme = createMuiTheme({
  typography: {
    // fontFamily: "TokyoOneSolid, Arial",
    fontFamily: "Juanita ITC, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [tokyo_one_solid],
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
