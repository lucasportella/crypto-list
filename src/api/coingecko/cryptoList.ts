import request, { BASE_URL, COIN_GECKO_API, API_KEY, RequestResponse } from "./index";

export const requestCryptoListFullURL = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&${COIN_GECKO_API}=${API_KEY}`

export const requestCryptoList = async () => {
  const response: RequestResponse = await request(
    requestCryptoListFullURL, "GET")
  if (response.error.hasError) {
    throw new Error(`Error while fetching crypto list.`);
  }
  return response.data as ICrypto[]
}

export default requestCryptoList

export interface ICrypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}