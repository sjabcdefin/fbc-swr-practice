const headers = { Accept: "application/json" };
export const fetcher = (url) => fetch(url, { headers }).then((r) => r.json());
