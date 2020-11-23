import React from "react"
import Layout from "../components/layout"
export default function Galery() {
  return (
    <div style={{ color: `red` }}>
      <Layout title="IMAGE DIRECT"></Layout>
      {/* from provate repositerie changed le 23 novembre 2020 there is token... maybe a date of expiration*/}
      <img
        src="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/knupel_72dpi/AttGen_13_60_75p5_CGTG_AA_72.jpg?token=AAZNRLJXF65OP4ZEWDYIGVK7YTY4O"
        alt="CGTG_AA from private repositerie"
      />
      <img
        src="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/knupel_72dpi/AttGen_6_60_37p5_CGAT_AA_72.jpg?token=AAZNRLM6SVDW35VLJT5NT5C7YTZFC"
        alt="CGAT_AA from private repositerie"
      />
      {/* from public repositerie */}
      <img
        src="https://raw.githubusercontent.com/StanLepunK/gatsby_react_lab/main/media/media_art/AttGen_7_60_32p5_ATAC_AA_72.jpg"
        // src="https://github.com/StanLepunK/gatsby_react_lab/blob/main/media/media_art/AttGen_7_60_32p5_ATAC_AA_72.jpg"
        // src="../../media/media_art/AttGen_7_60_32p5_ATAC_AA_72.jpg"
        // src="./media/media_art/AttGen_7_60_32p5_ATAC_AA_72.jpg"
        alt="ATAC_AA from public repositerie"
      />
      <img
        src="https://raw.githubusercontent.com/StanLepunK/gatsby_react_lab/main/media/photo/tdm/TDM 199568.JPG"
        // src="https://github.com/StanLepunK/gatsby_react_lab/blob/main/media/media_art/AttGen_7_60_32p5_ATAC_AA_72.jpg"
        // src="../../media/media_art/AttGen_7_60_32p5_ATAC_AA_72.jpg"
        // src="./media/media_art/AttGen_7_60_32p5_ATAC_AA_72.jpg"
        alt="ATAC_AA from public repositerie"
      />
    </div>
  )
}
