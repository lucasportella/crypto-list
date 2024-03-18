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
    <button onClick={handleConnect}>Connect</button>
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
      {showWallets && <WalletSelect />}
      {connected && renderWalletPanel()}
      {!connected && renderConnectButton()}
    </>
  )
}
