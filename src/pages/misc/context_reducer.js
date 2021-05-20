/**
 * Experiment with useReducer and Context
 * v 0.0.1
 * 2021-2021
 */
import React from "react";
import Layout from "../../components/layout";
import { createContext, useContext, useReducer } from "react";

const init_state_exp = {
  arg: 0,
};

const DispatchContext = createContext(() => {});
const StateContext = createContext(init_state_exp);

function ContextBuilder({ children }) {
  return (
    <DispatchContext.Provider>
      <StateContext.Provider>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

function Comp() {
  const [state, dispatch] = useReducer(reducer, init_state_exp);
  const { arg } = useContext(StateContext);

  return <Layout title="CONTEXT DISPATCH and STATE"></Layout>;
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_ARG": {
      return { ...state, arg: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function ContextDemo() {
  return (
    <ContextBuilder>
      <Comp />
    </ContextBuilder>
  );
}
