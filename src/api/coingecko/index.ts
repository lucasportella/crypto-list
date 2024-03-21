export const BASE_URL = "https://api.coingecko.com/api/v3"
export const COIN_GECKO_API = "x_cg_demo_api_key"
export const API_KEY: string = import.meta.env.VITE_COINGECKO_API_KEY
// need a server side like next js to not expose key

const request = async (route: string, type: string) => {
  try {
    const response = await fetch(route, {
      method: type,
      headers: {
        'Content-Type': 'application/json',
        // cant pass coin gecko api key here since it's bugged
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
