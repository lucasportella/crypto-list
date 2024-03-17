import { ICrypto } from "../../interfaces/apiTypes";
import request, { BASE_URL } from "./index";



const requestCoinsList = () => {
  const data: Promise<ICrypto[] | undefined> = request(
    `${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`, "GET")
  return data
}

export default requestCoinsList