export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Substitua pela API correta da Bybit
    const targetUrl = "https://api.bybit.com" + url.pathname + url.search;

    const headers = new Headers();
    headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)");

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: headers
    });

    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });
  }
};
