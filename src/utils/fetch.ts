const request = (url: RequestInfo | URL, method?: RequestInit["method"], text?: boolean) => fetch(url, { method: method || "GET" })
  .then(response => !!text ? response.text() : response.json());

export default request;