export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Modifica a URL para a API da Bybit
    const apiUrl = "https://api.bybit.com" + url.pathname + url.search;

    // Encaminha a requisição para a Bybit
    const response = await fetch(apiUrl, {
      method: request.method,
      headers: request.headers
    });

    return response;
  }        
};
  
