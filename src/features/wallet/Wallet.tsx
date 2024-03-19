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
    if (connected && provider && address) {
      getBalance(provider, dispatch, address)
    }
  }, [connected, provider, address, dispatch])

  const renderWalletPanel = () => (
    <article>
      <h3>
      </h3>
      <button onClick={() => dispatch(disconnect())}>
        Disconnect
      </button>
      <div><p>Address</p>
        <p>{address}</p>
      </div>
      <div>
        <p>Balance</p>
        <p>{balance}</p>
      </div>
    </article>
  )

  return (
    <>
      {showWallets &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-gray-800 flex justify-center items-center rounded-lg shadow-lg p-6 relative w-1/4 h-2/5">
            <button
              onClick={() => setShowWallets(false)}
              className="absolute right-2 top-2 px-2 border rounded">Voltar</button>
            <WalletSelect />
          </div>

        </div>
      }
      {connected && renderWalletPanel()}
      {!connected && renderConnectButton()}
    </>
  )
}
