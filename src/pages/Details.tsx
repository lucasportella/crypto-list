import React from "react";
import {
  useAppSelector,
  // useAppDispatch
} from "../app/hooks";
import {
  selectStatus
} from "../features/cryptoList/cryptoListSlice";
import { Wallet } from "../features/wallet/Wallet";
import { useNavigate } from "react-router-dom";
import CryptoDetails from "../features/cryptoDetails/CryptoDetails";
const Details: React.FC = () => {
  const status = useAppSelector(selectStatus)
  const navigate = useNavigate()

  const dataToRender = () => {
    switch (status) {
      case "idle":
        return <CryptoDetails />
      case "failed":
        return <p>Api has no return... </p>
      case "loading":
        return <p>Loading...</p>
      default:
        return <p>Something went wrong...</p>
    }
  }
  return (
    <section className="w-full h-full flex flex-col px-10 md:px-0 lg:h-screen overflow-auto">
      <section className=" w-full h-full self-center flex flex-col justify-around lg:w-4/5">
        <div className="flex  items-center gap-2 h-1/6 justify-start p-2 self-end">
          <Wallet />
          <button className="home-button" onClick={() => { navigate("/") }}>Homepage</button>
        </div>
        <div className="h-5/6">
          {dataToRender()}

        </div>
      </section>

    </section >
  );
}
export default Details;