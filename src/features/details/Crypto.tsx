import React from "react";
// import { selectCryptos } from "./cryptoListSlice";
// import { useAppSelector } from "../../app/hooks";
import { mock } from "./mock";
const CryptoDetails: React.FC = () => {
  const lineInfo = (title: string, tag: string, content: string | number) => (
    <section className="flex border-b rounded-lg  w-full  py-2 px-4 items-center gap-4 justify-between border-gray-600 ">
      <span className=" title">{title}:</span>
      <div className="flex gap-1 items-center subtitle">
        <span>{tag}</span>
        <span>{content}</span>
      </div>
    </section>

  )

  // const cryptos = useAppSelector(selectCryptos)
  const renderData = () => (
    <section key={mock.id} className="flex flex-col gap-4 ">
      {lineInfo("Market cap rank", "#", mock.market_cap_rank)}
      {lineInfo("Price", "$", mock.market_data.current_price.usd)}
      {lineInfo("High Price 24h", "$", mock.market_data.high_24h.usd)}
      {lineInfo("Low Price 24h", "$", mock.market_data.low_24h.usd)}
      {lineInfo("Price change 24h", "$", mock.market_data.price_change_24h_in_currency.usd)}
    </section>
  )
  return (
    <section key={mock.id} className="flex border rounded-lg w-full h-full p-10 gap-4 border-gray-600 justify-start flex-col">
      <div className="flex gap-2 items-center ">
        <img
          src={mock.image.large}
          alt={mock.id}
          width={"30px"}
          height={"20px"}
          className="rounded-full"
        />
        <div>
          <span className="text-white text-lg font-bold tracking-wide"> {mock.id}</span>
        </div>
      </div>
      <section className="flex w-full justify-between h-2/4">
        {renderData()}
        <section className="md:w-3/5">
          <h1 className="title border w-full">Gráfico</h1>
        </section>
      </section>
      <section className="flex flex-col h-2/4 overflow-auto items-center gap-2">
        <h1 className="title border-b border-gray-600 w-fit px-10 text-center">About {mock.id}</h1>
        <p className="text-sm leading-relaxed text-left tracking-wide">{mock.description.en}</p>
      </section>
    </section>
  );
}
export default CryptoDetails;