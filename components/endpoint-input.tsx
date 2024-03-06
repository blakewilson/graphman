"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EndpointInput() {
  const [url, setUrl] = useState(useSearchParams().get("url") ?? "");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        window.location.assign(`/?url=${encodeURIComponent(url)}`);
      }}
      className="relative w-full flex items-center"
    >
      <label htmlFor="search" className="sr-only">
        GraphQL Endpoint
      </label>

      <input
        id="search"
        name="search"
        className="block w-full rounded-md border-0 bg-[color:var(--app-neutral)] py-2.5 pr-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 text-md bg-gray-800 ring-gray-600 text-white shadow-sm ring-1 ring-inset ring-gray-300"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      {/* <div className="absolute inset-y-0 right-0 flex py-2 pr-1.5">
        <kbd className="inline-flex items-center rounded border border-gray-200 px-2.5 font-sans text-gray-400 text-sm border-gray-600">
          Enter
        </kbd>
      </div> */}
    </form>
  );
}
