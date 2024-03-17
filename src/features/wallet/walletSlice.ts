import { createAppSlice } from "../../app/createAppSlice"
import { type PayloadAction } from "@reduxjs/toolkit"

interface walletSliceState {
  connected: boolean
  providers: EIP6963ProviderDetail[]
  chosenProvider: EIP6963ProviderDetail | undefined
  address: string | undefined
  balance: number | undefined
}

const initialState: walletSliceState = {
  connected: false,
  providers: [],
  chosenProvider: undefined,
  address: undefined,
  balance: undefined,
}

export const walletSlice = createAppSlice({
  name: "wallet",
  initialState,
  reducers: create => ({
    connect: create.reducer(state => {
      state.connected = true
    }),
    disconnect: create.reducer(state => {
      state.connected = false
    }),
    setProviders: create.reducer((state, action: PayloadAction<EIP6963ProviderDetail[]>) => {
      state.providers = action.payload
    }),
    setChosenProvider: create.reducer((state, action: PayloadAction<EIP6963ProviderDetail>) => {
      state.chosenProvider = action.payload
    }),
    setAddress: create.reducer((state, action: PayloadAction<string>) => {
      state.address = action.payload
    }),
    getBalance: create.reducer((state, action: PayloadAction<number>) => {
      state.balance = action.payload
    }),
  }),
  selectors: {
    selectConnected: wallet => wallet.connected,
    selectProviders: wallet => wallet.providers,
    selectChosenProvider: wallet => wallet.chosenProvider,
    selectBalance: wallet => wallet.balance,
  }
})

export const { connect, disconnect, setAddress, getBalance } = walletSlice.actions

export const { selectConnected, selectChosenProvider, selectProviders, selectBalance } = walletSlice.selectors