import { useSyncExternalStore } from "react";

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

export const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
  try {
    const unknownAccounts = await providerWithInfo.provider
      .request({ method: 'eth_requestAccounts' })
    const accounts: string[] = unknownAccounts as string[]
    if (accounts?.[0]) {
      console.log(accounts)
    }
  } catch (error) {
    console.error(error)
  }
}

export const getBalance = async (providerWithInfo: EIP6963ProviderDetail) => {
  try {
    const balance = await providerWithInfo?.provider.request({
      method: "eth_getBalance"
    })
    console.log(balance)
    return balance
  } catch (error) {
    console.error(error)
    return;
  }
}