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
    <button onClick={handleConnect}>Connect</button>
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
      {showWallets && <WalletSelect />}
      {connected && renderWalletPanel()}
      {!connected && renderConnectButton()}
    </>
  )
}
