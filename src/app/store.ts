import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { cryptoListSlice } from "../features/cryptoList/cryptoListSlice"
import { walletSlice } from "../features/wallet/walletSlice";

const rootReducer = combineSlices(cryptoListSlice, walletSlice)
export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
})

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>