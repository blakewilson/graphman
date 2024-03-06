"use client";

import { useEffect, useState } from "react";

export default function Share() {
  const [text, setText] = useState("Copy Share Link");

  useEffect(() => {
    if (text === "Copied!") {
      setTimeout(() => {
        setText("Copy Share Link");
      }, 1500);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);

        setText("Copied!");
      }}
      className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
    >
      {text}
    </button>
  );
}
