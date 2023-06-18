export function queryMaker(value: string) {
  const url: any = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  params.set("status", value);
  url.search = params.toString();
  return url.toString();
}
