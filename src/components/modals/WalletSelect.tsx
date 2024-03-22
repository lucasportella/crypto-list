import { connectToProvider, useSyncProviders } from "../../api/ethereum/multiWallet/multiWalletStore"
import { useAppDispatch } from "../../app/hooks"
export const WalletSelect = () => {
  const providers = useSyncProviders()
  const dispatch = useAppDispatch()

  const renderProviderData = (provider: EIP6963ProviderDetail) => (
    <button className="flex flex-col items-center justify-center border p-2 rounded gap-2" key={provider.info.uuid} onClick={() => connectToProvider(provider, dispatch)} >
      <img src={provider.info.icon} alt={provider.info.name}
        width="50px"
        height="50px"
        className="rounded" />
      <span>{provider.info.name}</span>
    </button>
  )

  if (providers.length) {
    return (
      <section className="flex flex-col gap-2 h-4/5  justify-center">
        <span className="font-bold tracking-wider text-white text-center">Select wallet:</span>
        <section className="flex gap-6">
          {providers?.map((provider: EIP6963ProviderDetail) => (
            renderProviderData(provider)
          ))}
        </section>
      </section>
    )
  }
  return <div>No wallets available, please install one.</div>
}