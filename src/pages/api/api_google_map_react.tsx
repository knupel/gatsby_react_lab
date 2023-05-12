/**
 * Google map
 * https://developers.google.com/maps/documentation/javascript/reference
 * https://www.youtube.com/watch?v=n1UorU1PALk
 * https://developers.google.com/maps/documentation/javascript/cloud-setup
 * https://github.com/googlemaps/react-wrapper
 * https://console.cloud.google.com/apis
 * may be need to install
 * npm i @types/google.maps --save-dev
 * v 0.0.1
 * 2023-2023
 */

import React, { useRef, useEffect} from "react";
// APP
import Layout from "../../components/struct/layout";
// GOOGLE MAP
import { Wrapper, Status} from "@googlemaps/react-wrapper";




function Spinner() {
  return <>Loading</>
}

function Error() {
  return <>Error</>
} 

function MyMap({center,zoom, } : { center: google.maps.LatLngLiteral; zoom: number; }) {
  const ref = useRef<any>();

  useEffect(() => {
    new window.google.maps.Map(ref.current, { center, zoom });
  });

  const style = {
    border: "solid 10px magenta",
    margin: "20px",
    width: "400px",
    height: "700px",
  }

  return <div ref={ref} id="map" style={style}/>;
}

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <Spinner/>;
  if (status === Status.FAILURE) return <Error/>;
  return null;
};
// need to pass by GATSBY_XXXXX to keep the key visible in file... but now the key have a public exposition
const env_google_id : string | undefined = process.env.GATSBY_GOOGLE_MAP_ID;

function GoogleMap() {
  // corsican coordinate
  const center = { lat: 42.15, lng: 9.15 };
  const zoom = 8;

  // WORK but the API KEY is exposed, but never mind because the URL of the site is write in the Google account
  if(typeof env_google_id ===  "string") {
    return  <Wrapper apiKey={env_google_id} render={render} >
      <MyMap center={center} zoom={zoom}/>
    </Wrapper>
  } else return null;
}


export default function ApiGoogleMapReact() {
  return (
    <div>
      <Layout title="API Google Map React" link="true"></Layout>
      <GoogleMap/>
    </div>
  );
}


export const Head = () => {
	<>
		<title>API</title>
		<meta name="author" content="Knupel" />
		<meta name="description" content="API google map React" />
	</>
}

