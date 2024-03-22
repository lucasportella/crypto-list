import { createAppSlice } from "../../app/createAppSlice"
import { ICryptoVariation } from "../../api/coingecko/cryptoVariation"
import requestCryptoVariation from "../../api/coingecko/cryptoVariation"

export interface CryptoListState {
  cryptoVariation: ICryptoVariation
  status: "idle" | "loading" | "failed" | "success"
}

const initialState: CryptoListState = {
  cryptoVariation: {
    prices: [],
    market_caps: [],
    total_volumes: [],
  },
  status: "idle",
};
export const cryptoVariationSlice = createAppSlice({
  name: "cryptoVariation",
  initialState,
  reducers: create => ({
    addVariation: create.asyncThunk(async (id) => {
      const response = await requestCryptoVariation(id)
      return response
    },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "success"
          if (action.payload) {
            state.cryptoVariation = JSON.parse(JSON.stringify(action.payload))
          }
        },
        rejected: state => {
          state.status = "failed"
        },
      },)
  }),
  selectors: {
    selectVariation: state => state.cryptoVariation,
    selectStatus: state => state.status,
  },
})
export const { addVariation } = cryptoVariationSlice.actions
export const { selectVariation, selectStatus } = cryptoVariationSlice.selectors
