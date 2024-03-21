import request, { BASE_URL, COIN_GECKO_API, API_KEY, RequestResponse } from "./index";

const requestCryptoVariation = async (id: string): Promise<ICryptoVariation> => {
  const response: RequestResponse = await request(
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=1&${COIN_GECKO_API}=${API_KEY}`, "GET")
  if (response.error.hasError) {
    throw new Error(`Error while fetching ${id} price variation.`);
  }
  return response.data as ICryptoVariation
}

export default requestCryptoVariation

export interface ICryptoVariation {
  prices: number[][]
  market_caps: number[][]
  total_volumes: number[][]
}
