import request, { BASE_URL } from "./index";

const requestCryptoVariation = async (id: string): Promise<ICryptoVariation> => {
  const data = await request(
    `${BASE_URL}coins/${id}/market_chart?vs_currency=usd&days=1`, "GET")
  return data
}

export default requestCryptoVariation

export interface ICryptoVariation {
  prices: number[][]
  market_caps: number[][]
  total_volumes: number[][]
}
