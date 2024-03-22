import React, { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../app/hooks";
import { addCryptoDetails, selectStatus } from "../features/cryptoDetails/CryptoSlice";
import CryptoDetails from "../features/cryptoDetails/CryptoDetails";
import { Loading } from "../components/loading/loading";
import { addVariation } from "../features/cryptoVariation/cryptoVariationSlice";
import { useLocation } from "react-router-dom";
const Details: React.FC = () => {
  const location = useLocation()
  const cryptoId = location.pathname.slice(1)
  const dispatch = useAppDispatch()
    useEffect(() => {
    dispatch(addCryptoDetails(cryptoId))
    dispatch(addVariation(cryptoId))
  }, [dispatch, cryptoId])
  const status = useAppSelector(selectStatus)
  const dataToRender = () => {
    switch (status) {
      case "success":
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