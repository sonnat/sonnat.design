export default function removeSlashes(
  url: string = "",
  options: { leadingSlashes?: boolean; trailingSlashes?: boolean } = {}
) {
  const { leadingSlashes = true, trailingSlashes = true } = options;

  let end = url.length - 1;
  let start = 0;

  if (leadingSlashes) while (url.charAt(start) === "/") ++start;
  if (trailingSlashes) while (url.charAt(end) === "/") --end;

  return url.slice(start, end + 1);
}
