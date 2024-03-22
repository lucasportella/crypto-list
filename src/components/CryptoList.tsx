import React from "react";
import { addCrypto, selectCryptos } from "../features/cryptoList/cryptoListSlice";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { formatDollarValue } from "../utils/formatString";
import { useAppDispatch } from "../app/hooks";
import { ButtonsContainer } from "./nav/ButtonsContainer";
const CryptoList: React.FC = () => {
  const cryptos = useAppSelector(selectCryptos)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(addCrypto({}))
  }
  const navigate = useNavigate()
  const renderData = cryptos.map((item, index) => (
    <section key={item.id} className="flex border rounded-lg mb-4 w-full px-2 py-2 items-center gap-4 justify-between border-gray-600 lg:w-3/5 ">
      <div className="flex gap-2 items-center title">
        <span># {index + 1}</span>
        <img
          src={item.image}
          alt={item.id}
          width={"50px"}
          height={"50px"}
          className="rounded-full"
        />
        <div>
          <span>{item.id}</span>
          <div className="flex gap-1 items-center subtitle">
            <span>$</span>
            <span>{formatDollarValue(item.current_price)}</span>
          </div>
        </div>

      </div>
      <section className="flex items-center  gap-2">

        <button className="home-button" onClick={() => { navigate(`${item.id}`) }}>Details</button>

      </section>
    </section>
  ))
  return (
    <section className="border flex flex-col border-gray-600 px-2 items-center py-6 w-full self-center  rounded-md gap-2 overflow-auto h-4/5 lg:px-0  md:w-4/5">
      <div className="lg:w-3/5 w-full">
        <ButtonsContainer text="refresh list" handleClick={handleClick} />
      </div>
      {renderData}
    </section>
  );
}
export default CryptoList;