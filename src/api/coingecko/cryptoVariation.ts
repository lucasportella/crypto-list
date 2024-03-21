import request, { BASE_URL, COIN_GECKO_API, API_KEY } from "./index";

const requestCryptoVariation = async (id: string): Promise<ICryptoVariation> => {
  const data = await request(
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=1&${COIN_GECKO_API}=${API_KEY}`, "GET")
  return data
}

export default requestCryptoVariation

export interface ICryptoVariation {
  prices: number[][]
  market_caps: number[][]
  total_volumes: number[][]
}
