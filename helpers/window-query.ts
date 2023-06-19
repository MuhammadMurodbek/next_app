"use client";
export function getWindowValues() {
  const pageIndex =
    typeof window !== "undefined"
      ? Object.fromEntries(new URLSearchParams(window.location.search))
      : {};
  return pageIndex;
}
