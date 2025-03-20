export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Modifica a URL para chamar a API da Bybit
    const apiUrl = "https://api.bybit.com" + url.pathname + url.search;

    // Faz a requisição para a Bybit e retorna a resposta
    const response = await fetch(apiUrl, {
      method: request.method,
      headers: request.headers
    });

    return response;
  }
};
