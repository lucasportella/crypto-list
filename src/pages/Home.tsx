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
    <section className="w-full h-screen flex flex-col px-10 md:p-0">
      <section className=" w-full h-full self-center flex flex-col justify-around lg:w-3/5 ">
        <div className="flex  items-center gap-2  justify-start p-2 self-end">
          <Wallet />
          <button
            // onClick={() => { dispatch(addCrypto({})) }}
            className="home-button"
          >refresh list</button>
        </div>
        {dataToRender()}
      </section>

    </section >
  );
}
export default Home;