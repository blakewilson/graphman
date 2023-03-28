import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";

import "graphiql/graphiql.css";
import { isValidUrl } from "../utils/isValidUrl";
import { useTheme } from "@graphiql/react";
import { useDebounce } from "use-debounce";

export default function Editor() {
  if (typeof window === "undefined") {
    return null;
  }

  const {
    state: { graphqlEndpoint },
    dispatch,
  } = useAppContext();
  const [debouncedEndpoint] = useDebounce(graphqlEndpoint, 1000);

  if (!isValidUrl(debouncedEndpoint)) {
    return null;
  }

  return (
    <GraphiQL
      fetcher={createGraphiQLFetcher({
        url: graphqlEndpoint,
      })}
      shouldPersistHeaders={false}
      defaultQuery={`# Welcome to GraphMan

# GraphMan is a GraphiQL IDE that lets you specify your own GraphQL endpoint.

# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
`}
      // Disable history for now since records should be tied to the endpoint url
      storage={{
        getItem: (key: string) => null,
        setItem: (key: string, value: string) => {
          return;
        },
        clear: () => {},
        length: 0,
        removeItem: (key: string) => {},
      }}
    >
      <GraphiQL.Logo>
        <></>
      </GraphiQL.Logo>
    </GraphiQL>
  );
}
