// import React from "react"
// hEADER 
// v 0.2.0
//
import React, { FC } from 'react';

interface HeaderProps {
  [props: string]: any;
}

const Header: FC<HeaderProps> = (props: any) => {
  return (
    <>
      <h1>{props.str}</h1>
    </>
    );
};


export default Header;
