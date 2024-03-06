"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function EnterURL() {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());
        params.set("url", url);

        router.push(`/?url=${encodeURIComponent(url)}`);
      }}
    >
      <label
        htmlFor="search"
        className="block text-sm font-medium leading-6 text-white"
      >
        GraphQL Endpoint
      </label>
      <div className="relative mt-2 flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="block w-full rounded-md border-0 py-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 text-lg sm:leading-6 bg-gray-800 ring-gray-600 text-white"
        />
        <div className="absolute inset-y-0 right-0 flex py-2 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-gray-400 text-sm border-gray-600">
            Enter
          </kbd>
        </div>
      </div>
    </form>
  );
}
