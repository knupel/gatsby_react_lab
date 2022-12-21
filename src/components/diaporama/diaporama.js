/**
 * Diaporama
 * v 0.0.3
 * 2021-2022
 * by @knupel
 * https://www.knupel.art/
 * stan[at]knupel.art
 * 
 * */
import * as React from "react";

import { useState, createContext, useContext } from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./diaporama.css";

export const DiapoContext = createContext(null);

function Title({ title, is, index, current, node }) {
  if (is === true) {
    return (
      <div className={index === current ? "slide active" : "slide"}>
        <h1>{node.base.split("_").join(" ").split(".")[0]}</h1>
      </div>
    );
  } else return null;
}
// BUTTON GLOBAL

function Button({ click, name, className }) {
  return (
    <button className={className} onClick={click}>
      {name}
    </button>
  );
}

// BUTTON NEXT

function ButtonNext({ allFile, name, is }) {
  const { current, set_current } = useContext(DiapoContext);

  const go_next = () => {
    if (current < allFile.edges.length - 1) {
      set_current(current + 1);
    } else {
      set_current(0);
    }
  };
  if(is) {
    return <Button click={go_next} name={name} className={"button_console"}/>
  } else return null;
  
}

// BUTTON PREVIOUS

function ButtonPrevious({ allFile, name, is }) {
  const { current, set_current } = useContext(DiapoContext);

  const go_previous = () => {
    if (current > 0) {
      set_current(current - 1);
    } else {
      set_current(allFile.edges.length - 1);
    }
  };
  if(is) {
    return <Button click={go_previous} name={name} className={"button_console"}/>
  } else return null;
  
}

// BUTTON FIRST

function ButtonFirst({ name, is }) {
  const { set_current } = useContext(DiapoContext);

  const go_first = () => {
    set_current(0);
  };
  if(is) {
    return <Button click={go_first} name={name} className={"button_console"}/>
  } else return null;
 
}

// BUTTON LAST
function ButtonLast({ allFile, name, is }) {
  const { set_current } = useContext(DiapoContext);

  const go_last = () => {
    set_current(allFile.edges.length - 1);
  };
  if(is) {
    return <Button click={go_last} name={name} className={"button_console"}/>
  } else {
    return null
  }
}

// BUTTON LAST
function ButtonClose({ name, is }) {
  const { current, set_current, set_ref } = useContext(DiapoContext);

  const close = () => {
    set_ref(current);
    set_current( - 1);
  };
  if(is) {
    return <Button click={close} name={name} className={"button_console"}/>
  } else {
    return null
  }
}

function ButtonOpen({ name, is }) {
  const { ref, set_current } = useContext(DiapoContext);

  const open = () => {
    set_current(ref);
  };
  if(is) {
    return <Button click={open} name={name} className={"button_console"}/>
  } else {
    return null
  }
}


// CONSOLE
///////////////lemonde.fr


function Console({ allFile, setting }) {
  const {current} = useContext(DiapoContext);
  if(current < 0) {
    return <ButtonOpen name={setting.open} is={setting.open_is}/>

  } else {
    return (
      <div>
        <ButtonFirst name={setting.first} is={setting.first_is}/>
        <ButtonPrevious allFile={allFile} name={setting.previous} is={setting.previous_is}/>
        <ButtonNext allFile={allFile} name={setting.next} is={setting.next_is}/>
        <ButtonLast allFile={allFile} name={setting.last} is={setting.last_is}/>
        <ButtonClose name={setting.close} is={setting.close_is}/>
      </div>
    );

  }
  
}



// DIAPORAMA
///////////////////

export function Diaporama({ allFile, setting }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: setting.background,
  };

  const [current, set_current] = useState(0);
  const [ref, set_ref] = useState(0);

  // security
  if (!Array.isArray(allFile.edges) || allFile.edges.length <= 0) {
    return null;
  }

  return (
    <DiapoContext.Provider value={{ current, set_current, ref, set_ref }}>
      <div style={style}>
        {allFile.edges.map(({ node }, index) => (
          <div>
            <Title
              title={node.base.split("_").join(" ").split(".")[0]}
              is={index === current}
              node={node}
              index={index}
              current={current}
            />
            <div
              className={index === current ? "slide active" : "slide"}
              key={node.id}
              aria-hidden={index !== current}
            >
              {index === current && (
              <GatsbyImage image={getImage(node)} alt={node.base} backgroundColor={setting.background}/>
              )}
            </div>
          </div>
        ))}
        <Console allFile={allFile} setting={setting} />
        {/* <Summary allFile={allFile}/> */}
      </div>
    </DiapoContext.Provider>
  );
}
