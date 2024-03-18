import { handleConnect, useSyncProviders } from "../../api/ethereum/multiWallet/multiWalletStore"

export const WalletSelect = () => {
  const providers = useSyncProviders()

  const renderProviderData = (provider: EIP6963ProviderDetail) => (
    <button
      key={provider.info.uuid}
      onClick={() => handleConnect(provider)}
      className="flex flex-col items-center border p-2 rounded gap-2"
    >
      <img
        src={provider.info.icon}
        alt={provider.info.name}
        width="50px"
        height="50px"
        className="rounded"
      />
      <div>{provider.info.name}</div>
    </button>
  )

  if (providers.length) {
    return providers?.map((provider: EIP6963ProviderDetail) => (
      renderProviderData(provider)
    ))
  }
  return <div>No wallets available, please install one.</div>
}