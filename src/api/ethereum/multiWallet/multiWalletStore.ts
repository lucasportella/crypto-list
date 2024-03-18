import { useSyncExternalStore } from "react";
import { AppDispatch } from "../../../app/store";
import { connect, setAddress, setBalance, setChosenProvider } from "../../../features/wallet/walletSlice";
import { ethers } from "ethers";

declare global {
  interface WindowEventMap {
    "eip6963:announceProvider": CustomEvent
  }
}

let providers: EIP6963ProviderDetail[] = []

export const multiWalletStore = {
  value: () => providers,
  subscribe: (callback: () => void) => {
    function onAnnouncement(event: EIP6963AnnounceProviderEvent) {
      if (providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) {
        return;
      }
      providers = [...providers, event.detail]
      callback()
    }
    window.addEventListener("eip6963:announceProvider", onAnnouncement);
    window.dispatchEvent(new Event("eip6963:requestProvider"));

    return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)
  }
}

export const useSyncProviders = () => useSyncExternalStore(multiWalletStore.subscribe, multiWalletStore.value, multiWalletStore.value)

export const connectToProvider = async (providerWithInfo: EIP6963ProviderDetail, dispatch: AppDispatch) => {
  try {
    const unknownAccounts = await providerWithInfo.provider
      .request({ method: 'eth_requestAccounts' })
    const accounts: string[] = unknownAccounts as string[]
    const account = accounts?.[0]
    if (accounts?.[0]) {
      dispatch(connect())
      dispatch(setAddress(account))
      dispatch(setChosenProvider(providerWithInfo.provider))
    }
  } catch (error) {
    console.error(error)
  }
}

export const getBalance = async (provider: EIP1193Provider, dispatch: AppDispatch, address: string) => {
  try {

    const balance = await provider.request({
      method: "eth_getBalance",
      params: [address, 'latest']
    })
    if (typeof balance === 'string') {
      const balanceInEther = (Number(ethers.formatEther(balance))).toFixed(4)
      dispatch(setBalance(balanceInEther))
    }
  } catch (error) {
    console.error(error)
    return;
  }
}

export const initializeProvider = async (providerWithInfo: EIP6963ProviderDetail, dispatch: AppDispatch, address: string) => {
  await connectToProvider(providerWithInfo, dispatch)
  await getBalance(providerWithInfo.provider, dispatch, address)
}