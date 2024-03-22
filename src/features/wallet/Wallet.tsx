import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { disconnect, selectBalance, selectConnected, selectChosenProvider, selectAddress } from "./walletSlice"
import { WalletSelect } from "../../components/modals/WalletSelect"
import { getBalance } from "../../api/ethereum/multiWallet/multiWalletStore"

export const Wallet = () => {
  const dispatch = useAppDispatch()
  const connected = useAppSelector(selectConnected)
  const address = useAppSelector(selectAddress)
  const provider = useAppSelector(selectChosenProvider)
  const balance = useAppSelector(selectBalance)

  const [showWallets, setShowWallets] = useState(false)

  const handleConnect = () => {
    setShowWallets(true)
  }

  const renderConnectButton = () => (
    <button className="home-button" onClick={handleConnect}>Connect</button>
  )

  useEffect(() => {
    if (connected) {
      setShowWallets(false)
    }
    if (connected && provider && address) {
      getBalance(provider, dispatch, address)
    }
  }, [connected, provider, address, dispatch])

  const renderWalletPanel = () => (
    <article className="w-fit flex  gap-2  flex-col py-2 md:py-0">

      <section>
        <div className="flex gap-1 items-start flex-col  md:flex-row md:items-center  md:gap-2">
          <p className="title">Address:</p>
          <p className="subtitle">{address}</p>
        </div>
        <div className="flex gap-1  items-start  flex-col md:flex-row md:items-center md:gap-2">
          <p className="title">eth balance:</p>
          <p className="subtitle">{balance}</p>
        </div>

      </section>
      <button
        className="home-button w-fit"
        onClick={() => dispatch(disconnect())}>
        Disconnect
      </button>
    </article>
  )
  return (
    <>
      {!connected && showWallets &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-gray-800 flex justify-center items-center rounded-lg shadow-lg p-6 relative  w-2/4 h-2/5 lg:w-1/4">
            <button
              onClick={() => setShowWallets(false)}
              className="absolute right-2 top-2  px-2 py-1 subtitle border rounded">Back</button>
            <WalletSelect />
          </div>

        </div>
      }
      {connected && renderWalletPanel()}
      {!connected && renderConnectButton()}
    </>
  )
}
