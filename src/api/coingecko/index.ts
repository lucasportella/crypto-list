export const BASE_URL = "https://api.coingecko.com/api/v3"
export const COIN_GECKO_API = "x_cg_demo_api_key"
export const API_KEY: string = import.meta.env.VITE_COINGECKO_API_KEY
// need a server side like next js to not expose key

export interface RequestResponse {
  data: object,
  error: {
    hasError: boolean,
    errorMessage: unknown,
  }
}

const generateDefaultReturn = (data: object) => ({
  data,
  error: {
    hasError: false,
    errorMessage: ''
  }
})

const generateErrorReturn = (error: unknown) => ({
  data: {},
  error: {
    hasError: true,
    errorMessage: error
  }
})

const request = async (route: string, type: string): Promise<RequestResponse> => {
  try {
    const response = await fetch(route, {
      method: type,
      headers: {
        'Content-Type': 'application/json',
        // cant pass coin gecko api key here since it's bugged
      },

    });
    const data = await response.json();
    if (data.error) {
      return generateErrorReturn(data.error)
    }
    return generateDefaultReturn(data)
  } catch (error) {
    console.error('Error:', error);
    return generateErrorReturn(error)
  }
}
export default request
