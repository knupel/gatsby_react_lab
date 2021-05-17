import React from "react";
import PropTypes from "prop-types";
import { createContext } from "react";
import { useReducer } from "react";
import { useState } from "react";

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://www.xspdf.com/resolution/53771877.html
// https://www.tutorialspoint.com/using-usecontext-in-react-js

const init_state = {
  sketch: null,
};

export const P5DispatchContext = createContext(() => {});
export const P5StateContext = createContext(init_state);

function reducer(state, action) {
  switch (action.type) {
    case "USE_SKETCH": {
      return { sketch: true };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

//     <P5DispatchContext.Provider value={dispatch({ type: "USE_SKETCH" })}>
export default function P5Manager({ children }) {
  const [state, dispatch] = useReducer(reducer, init_state);

  // const [sketches, set_sketches] = useState(null);
  // const value = { sketches, set_sketches };
  return (
    <P5DispatchContext.Provider value={dispatch}>
      <P5StateContext.Provider value={state}>
        {children}
      </P5StateContext.Provider>
    </P5DispatchContext.Provider>
  );
}

P5Manager.propTypes = {
  children: PropTypes.any.isRequired,
};

// export P5Manager;
