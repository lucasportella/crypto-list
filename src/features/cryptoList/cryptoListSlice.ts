// import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { ICrypto } from "../../api/coingecko/list"
import requestCoinsList from "../../api/coingecko/list"

export interface CryptoListState {
  cryptos: ICrypto[]
  status: "idle" | "loading" | "failed"
}
const initialState: CryptoListState = {
  cryptos: [],
  status: "idle",
}
export const cryptoListSlice = createAppSlice({
  name: "cryptoList",
  initialState,
  reducers: create => ({
    addCrypto: create.asyncThunk(async () => {
      const response = await requestCoinsList()
      return response
    },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          if (action.payload) {
            state.cryptos = []
            state.cryptos.push(...action.payload)
          }
        },
        rejected: state => {
          state.status = "failed"
        },
      },)
  }),
  selectors: {
    selectCryptos: payload => payload.cryptos,
    selectStatus: payload => payload.status,
  },
})
export const { addCrypto } = cryptoListSlice.actions
export const { selectCryptos, selectStatus } = cryptoListSlice.selectors
