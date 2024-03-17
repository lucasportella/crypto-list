import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addCrypto, selectStatus } from "../features/cryptoList/cryptoListSlice";
import List from "../features/cryptoList/CryptoList";
const Home: React.FC = () => {
  const dispatch = useAppDispatch()
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
    <div className="flex justify-center w-full items-center h-screen border">
      <button
        onClick={() => { dispatch(addCrypto({})) }}
        className="border p-2"
      >Click</button>
      {dataToRender()}

    </div>
  );
}
export default Home;