import React from "react"
import Layout from "../../components/layout"

import Button from "@mui/material/Button"
import { createTheme, ThemeProvider} from "@mui/material/styles"
import { Typography } from "@mui/material"

const zero_style = createTheme({
  typography: {
    fontFamily: ["Malaga", "Metalista-web", "serif"],
    fontSize: 60,
  },
})

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
