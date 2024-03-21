import request, { BASE_URL, COIN_GECKO_API, API_KEY, RequestResponse } from "./index";


const requestCryptoDetails = async (cryptoId: string) => {
  const response: RequestResponse = await request(
    `${BASE_URL}/coins/${cryptoId}?${COIN_GECKO_API}=${API_KEY}`, "GET")

  if (response.error.hasError) {
    throw new Error(`Error while fetching ${cryptoId} details.`);
  }
  const data = response.data as Details
  const { id, symbol, name, description, image, market_data, market_cap_rank } = data
  const dataToBeUsed = { id, symbol, name, description, image, market_data, market_cap_rank }
  return dataToBeUsed
}

export default requestCryptoDetails

export interface Details {
  id: string,
  symbol: string,
  name: string,
  description: Record<string, string>,
  image: {
    thumb: string,
    small: string,
    large: string
  },
  market_data: {
    current_price: Record<string, number>,
    high_24h: Record<string, number>,
    low_24h: Record<string, number>,
    price_change_24h_in_currency: Record<string, number>,
    market_cap_change_percentage_24h: number
  },
  market_cap_rank: number,
}