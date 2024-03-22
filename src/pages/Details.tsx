import React from "react";
import {
  useAppSelector,
} from "../app/hooks";
import { selectStatus } from "../features/cryptoList/cryptoListSlice"
import CryptoDetails from "../features/cryptoDetails/CryptoDetails";
import { Loading } from "../components/loading/loading";
const Details: React.FC = () => {
  const status = useAppSelector(selectStatus)

  const dataToRender = () => {
    switch (status) {
      case "idle":
        return <CryptoDetails />
      case "failed":
        return <p>Api has no return... </p>
      case "loading":
        return <Loading />
      default:
        return <p>Something went wrong...</p>
    }
  }
  return (
    <section className="w-full  flex flex-col px-5 md:px-0 h-screen overflow-auto">
      <section className=" w-full self-center flex flex-col justify-around lg:w-4/5 h-full">
        {dataToRender()}
      </section>

    </section >
  );
}
export default Details;