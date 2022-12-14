/**
 * Experiment with useReducer and Context
 * v 0.0.1
 * 2021-2021
 */
// https://www.kindacode.com/article/react-usereducer-hook-tutorial-and-examples/
// https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5
import React from "react";
import Layout from "../../components/struct/layout";
import { useReducer } from "react";
import { createContext, useContext } from "react";

const init_state_exp = {
  arg: 10,
};

const StateContext = createContext(init_state_exp);

function ContextBuilder({ children }) {
  const [state, dispatch] = useReducer(reducer, init_state_exp);
  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
}

function Comp() {
  const [state, dispatch] = useReducer(reducer, init_state_exp);
  const { arg } = useContext(StateContext);

  function add(event) {
    event.preventDefault();
    let value = 1;
    let type = "ADD";
    dispatch({
      type: type,
      arg: value,
    });
  }

  function sub(event) {
    event.preventDefault();
    let value = 1;
    let type = "SUB";
    dispatch({
      type: type,
      arg: value,
    });
  }

  return (
    <div>
      <Layout title="CONTEXT, DISPATCH and STATE"></Layout>
      <div onClick={add}>click to add</div>
      <div onClick={sub}>click to sub</div>
      <h2>et voilà le résultat du dispatch {state.arg}</h2>
    </div>
  );
}

function reducer(state, action) {
  console.log("atcion", action.type);
  switch (action.type) {
    case "ADD": {
      return { ...state, arg: state.arg + 1 };
    }
    case "SUB": {
      return { ...state, arg: state.arg - 1 };
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
