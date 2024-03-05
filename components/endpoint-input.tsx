"use client";

import { LinkIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";

export default function EndpointInput() {
  const url = useSearchParams().get("url");
  return (
    <>
      <label htmlFor="search" className="sr-only">
        GraphQL Endpoint
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border-0 bg-[color:var(--app-neutral)] py-3 pl-10 pr-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 text-xl"
          placeholder="https://my-site.com/graphql"
          type="search"
          value={url ?? ""}
        />
      </div>
    </>
  );
}
