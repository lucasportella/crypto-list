import React, { useState } from "react";
// import { selectCryptos } from "./cryptoListSlice";
// import { useAppSelector } from "../../app/hooks";
import { mock } from "./mock";
import Chart from "../../components/chart/LineChart";
import { formatDollarValue } from "../../utils/formatString";
const CryptoDetails: React.FC = () => {
  const maxLength = 400
  const [showFull, setShowFull] = useState(false);
  const lineInfo = (title: string, tag: string, content: string | number) => (
    <section className="flex border-b rounded-lg px-4 items-center py-1 gap-4 justify-between border-gray-600 w-full">
      <span className=" title">{title}:</span>
      <div className="flex gap-1 items-center subtitle">
        <span>{tag}</span>
        <span>{content}</span>
      </div>
    </section>

  )
  const toggleDescription = () => {
    setShowFull(!showFull);
  }
  // const cryptos = useAppSelector(selectCryptos)
  const renderData = () => (
    <section key={mock.id} className="flex flex-col gap-4 w-full">
      {lineInfo("Market cap rank", "#", mock.market_cap_rank)}
      {lineInfo("Price", "$", formatDollarValue(mock.market_data.current_price.usd))}
      {lineInfo("High Price 24h", "$", formatDollarValue(mock.market_data.high_24h.usd))}
      {lineInfo("Low Price 24h", "$", formatDollarValue(mock.market_data.low_24h.usd))}
      {lineInfo("Price change 24h", "$", formatDollarValue(mock.market_data.price_change_24h_in_currency.usd))}
    </section>
  )
  return (
    <section key={mock.id} className="flex border rounded-lg w-full  md:p-10 p-2 gap-4 border-gray-600 flex-col h-fit min-h-full">
      <div className="flex gap-2 items-center">
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
      <section className="h-full flex flex-col gap-6 w-full ">

        <section className="flex  flex-col   lg:justify-between gap-8  lg:h-2/4 lg:flex-row lg-min-h-2/4 ">
          {renderData()}
          <section className="w-full h-full relative  flex flex-col self-center">
            <p className=" absolute right-8 -mt-5 text-sm border border-sky-900 bg-sky-900 px-2 rounded text-gray-300 lg:-mt-6">24h</p>
            <Chart />
          </section>
        </section>
        <section className="flex flex-col m-4  items-center gap-2 h-fit ">
          <h1 className="title border-b border-gray-600 w-full text-start">About {mock.id}</h1>

          <div className="w-full">
            <p className="text-sm text-gray-400 leading-relaxed text-justify lg:text-left tracking-wide  w-full overflow-auto">
              {showFull ? mock.description.en : `${mock.description.en.slice(0, maxLength)}${mock.description.en.length > maxLength ? '...' : ''}`}
              {mock.description.en.length > maxLength && (
                <button
                  onClick={toggleDescription}
                  className="ml-2 underline"
                >
                  {showFull ? 'Show less' : 'Show more'}
                </button>
              )}
            </p>

          </div>
        </section>
      </section>
    </section>
  );
}
export default CryptoDetails;