import React, { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch
} from "../app/hooks";
import {
  addCrypto,
  selectStatus
} from "../features/cryptoList/cryptoListSlice";
import CryptoList from "../components/CryptoList";
import { Wallet } from "../features/wallet/Wallet";
import { Loading } from "../components/loading/loading";

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(addCrypto({}))
  }, [dispatch])

  const status = useAppSelector(selectStatus)

  const dataToRender = () => {
    switch (status) {
      case "idle":
        return <CryptoList />
      case "failed":
        return <p>Api has no return... </p>
      case "loading":
        return <Loading />
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
          >Refresh List</button>
        </div>
        {dataToRender()}
      </section>

    </section >
  );
}
export default Home;