"use client";

import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";

import { useQueryState } from "nuqs";

import "graphiql/graphiql.css";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export type EditorProps = {
  url: string;
  query?: string;
  variables?: string;
};

const DEFAULT_QUERY = `# Welcome to GraphMan

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
`;

export default function Editor({ url }: EditorProps) {
  const [query, setQuery] = useQueryState("query", { throttleMs: 1000 });
  const [variables, setVariables] = useQueryState("variables", {
    throttleMs: 1000,
  });

  return (
    <GraphiQL
      fetcher={createGraphiQLFetcher({
        url,
      })}
      shouldPersistHeaders={false}
      defaultQuery={query ? decodeURIComponent(query) : DEFAULT_QUERY}
      onEditQuery={(newQuery) => {
        setQuery(encodeURIComponent(newQuery));
      }}
      onEditVariables={(newVariables) => {
        setVariables(encodeURIComponent(newVariables));
      }}
      variables={variables ? decodeURIComponent(variables) : undefined}
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
