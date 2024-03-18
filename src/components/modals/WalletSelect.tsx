import { connectToProvider, useSyncProviders } from "../../api/ethereum/multiWallet/multiWalletStore"
import { useAppDispatch } from "../../app/hooks"
export const WalletSelect = () => {
  const providers = useSyncProviders()
  const dispatch = useAppDispatch()

  const renderProviderData = (provider: EIP6963ProviderDetail) => (
    <button key={provider.info.uuid} onClick={() => connectToProvider(provider, dispatch)} >
      <img src={provider.info.icon} alt={provider.info.name} />
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