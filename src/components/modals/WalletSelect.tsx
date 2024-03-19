import { connectToProvider, useSyncProviders } from "../../api/ethereum/multiWallet/multiWalletStore"
import { useAppDispatch } from "../../app/hooks"
export const WalletSelect = () => {
  const providers = useSyncProviders()
  const dispatch = useAppDispatch()

  const renderProviderData = (provider: EIP6963ProviderDetail) => (
    <button className="flex flex-col items-center border p-2 rounded gap-2" key={provider.info.uuid} onClick={() => connectToProvider(provider, dispatch)} >
      <img src={provider.info.icon} alt={provider.info.name} width="50px"
        height="50px"
        className="rounded" />
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