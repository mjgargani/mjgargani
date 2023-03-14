const request = async (url: RequestInfo | URL, method?: RequestInit['method'], text?: boolean) =>
  fetch(url, { method: method || 'GET' }).then(async (response) =>
    text ? response.text() : response.json(),
  )

export default request
