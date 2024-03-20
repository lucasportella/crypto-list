import request, { BASE_URL } from "./index";

// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&precision=2

const requestCryptoDetails = async (cryptoId: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await request(
    `${BASE_URL}coins/${cryptoId}`, "GET")
  const { id, symbol, name, description, image, market_data, market_cap_rank } = data

  const dataToBeUsed: Details = { id, symbol, name, description, image, market_data, market_cap_rank }
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