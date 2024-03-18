import { createAppSlice } from "../../app/createAppSlice"
import { type PayloadAction } from "@reduxjs/toolkit"

interface walletSliceState {
  connected: boolean
  providers: EIP6963ProviderDetail[]
  chosenProvider: EIP1193Provider | undefined
  address: string | undefined
  balance: string | undefined
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
    setChosenProvider: create.reducer((state, action: PayloadAction<EIP1193Provider>) => {
      state.chosenProvider = action.payload
    }),
    setAddress: create.reducer((state, action: PayloadAction<string>) => {
      state.address = action.payload
    }),
    setBalance: create.reducer((state, action: PayloadAction<string>) => {
      state.balance = action.payload
    }),
  }),
  selectors: {
    selectConnected: wallet => wallet.connected,
    selectProviders: wallet => wallet.providers,
    selectChosenProvider: wallet => wallet.chosenProvider,
    selectAddress: wallet => wallet.address,
    selectBalance: wallet => wallet.balance,
  }
})

export const { connect, disconnect, setAddress, setBalance, setChosenProvider, setProviders } = walletSlice.actions

export const { selectConnected, selectChosenProvider, selectProviders, selectBalance, selectAddress } = walletSlice.selectors