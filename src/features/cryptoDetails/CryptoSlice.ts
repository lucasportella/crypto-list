// import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import requestCryptoDetails from "../../api/coingecko/cryptoDetails"
import { Details } from "../../api/coingecko/cryptoDetails"
const InitialState: Details = {
  id: "", symbol: "", name: "",
  description: { en: "" },
  image: {
    thumb: "", small: "", large: ""
  },
  market_data: {
    current_price: {
      usd: 0,
    }, high_24h: {
      usd: 0
    }, low_24h: {
      usd: 0
    }, price_change_24h_in_currency: {
      usd: 0
    }, market_cap_change_percentage_24h: 0
  },
  market_cap_rank: 1,
}
export interface CryptoDetailsState {
  crypto: Details
  status: "idle" | "loading" | "failed" | "success"
}
const initialState: CryptoDetailsState = {
  crypto: InitialState,
  status: "idle",
}
export const cryptoDetailsSlice = createAppSlice({
  name: "cryptoDetails",
  initialState,
  reducers: create => ({
    addCryptoDetails: create.asyncThunk(async (id: string) => {
      const response = await requestCryptoDetails(id)
      return response
    },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "success"
          if (action.payload) {
            state.crypto = action.payload
          }
        },
        rejected: state => {
          state.status = "failed"
        },
      },),
  }),
  selectors: {
    selectDetails: payload => payload.crypto,
    selectStatus: payload => payload.status,
  },
})
export const { addCryptoDetails } = cryptoDetailsSlice.actions
export const { selectDetails, selectStatus } = cryptoDetailsSlice.selectors
