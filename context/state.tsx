import * as React from "react";

type Action =
  | { type: "setGraphqlEndpoint"; graphqlEndpoint: string }
  | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { graphqlEndpoint: string };
type AppProviderProps = { children: React.ReactNode };

const AppStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function appReducer(state: State, action: Action) {
  switch (action.type) {
    case "setGraphqlEndpoint": {
      return { ...state, graphqlEndpoint: action.graphqlEndpoint };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = React.useReducer(appReducer, {
    graphqlEndpoint: "",
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

function useAppContext() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export { AppProvider, useAppContext };
