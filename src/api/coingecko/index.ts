export const BASE_URL = "https://api.coingecko.com/api/v3/"
const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY
// need a server side like next js to not expose key

const request = async (route: string, type: string) => {
  try {
    const response = await fetch(route, {
      method: type,
      headers: {
        'Content-Type': 'application/json',
        "X-CoinAPI-Key": API_KEY
      },

    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return error
  }
}
export default request