import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { disconnect, selectBalance, selectConnected, selectChosenProvider } from "./walletSlice"
import { WalletSelect } from "../../components/modals/WalletSelect"

export const Wallet = () => {
  const dispatch = useAppDispatch()
  const connected = useAppSelector(selectConnected)
  const provider = useAppSelector(selectChosenProvider)
  const balance = useAppSelector(selectBalance)

  const [showWallets, setShowWallets] = useState(false)
  console.log(provider)
  const renderWalletPanel = () => {
    if (connected) {
      return walletPanel()
    }
  }

  const handleConnect = () => {
    setShowWallets(true)
  }

  const renderConnectButton = () => {
    return connectButton()
  }

  const connectButton = () => (
    <button onClick={handleConnect} className="home-button">Connect</button>
  )
  const walletPanel = () => (
    <article>
      <h3>
        Your Wallet
      </h3>
      <button onClick={() => dispatch(disconnect())}>
        Disconnect
      </button>
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
