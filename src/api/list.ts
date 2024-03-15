import { ICoin } from "../interfaces/apiTypes";
import request from "./index";
const BASE_URL = "https://api.coingecko.com/api/v3/"
const requestCoinsList = () => {
  const data: Promise<ICoin[]| unknown> = request(
    `${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`, "GET")
  return data
}

export default requestCoinsList