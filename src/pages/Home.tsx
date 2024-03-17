import React from "react";
import {
  useAppSelector,
  // useAppDispatch
} from "../app/hooks";
import {
  // addCrypto,
  selectStatus
} from "../features/cryptoList/cryptoListSlice";
import List from "../features/cryptoList/CryptoList";
import { Wallet } from "../features/wallet/Wallet";
const Home: React.FC = () => {
  // const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  const dataToRender = () => {
    switch (status) {
      case "idle":
        return <List />
      case "failed":
        return <p>Api has no return... </p>
      case "loading":
        return <p>Loading...</p>
      default:
        return <p>Something went wrong...</p>
    }
  }
  return (
    <div className="w-full h-full">
      <section className="flex flex-col justify-center center-items border">
      <Wallet />
        <div className="flex justify-center items-center p-2 gap-2">
          <span>Click the button to refresh list!</span>
          <button
            // onClick={() => { dispatch(addCrypto({})) }}
            className="border px-4 py-1 rounded"
          >Click</button>
        </div>
        {dataToRender()}
      </section>

      </div>
      );
}
      export default Home;