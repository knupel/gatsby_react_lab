/**
 * Diaporama
 * 2022-2022
 * // https://learus.github.io/react-material-ui-carousel/
 * // https://github.com/Learus/react-material-ui-carousel
 * */


/**
 * need to add check when the graphql is not complete
 */
import React from "react"
import Layout from "../../components/struct/layout"
// carousel
import { useStaticQuery, graphql } from "gatsby";
import { Diaporama } from "../../components/diaporama/diaporama";


const DiaporamaPhoto = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "tdm" } }) {
          edges {
            node {
              id
              base
              extension
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                      backgroundColor: "red"
                      width: 1000
                      height: 600
                      placeholder: BLURRED
                      quality: 90
                      blurredOptions: { width: 100 }
                      transformOptions: { cropFocus: CENTER, fit: CONTAIN })
              }
            }
          }
        }
      }
    `
  );

  const setting = {
    background: "red",
    first_is: false,
    first: "first",
    last_is: false,
    last: "last",
    previous_is: true,
    previous: "previous",
    next_is: true,
    next: "next",

    close_is: true,
    close: "close",
    open_is: true,
    open: "open",
  };

  return (
		<div>
    	<Layout title="DIAPORAMA make at home but not finish"></Layout>
      <Diaporama allFile={allFile} setting={setting} />
		</div>
  );
};

export default DiaporamaPhoto;