import React, { useState } from "react";
import Chart from "../../components/chart/LineChart";
import { formatDollarValue } from "../../utils/formatString";
import { useAppSelector } from "../../app/hooks";
import { selectDetails } from "./CryptoSlice";
import { useNavigate } from 'react-router-dom';
import { selectVariation } from "../cryptoVariation/cryptoVariationSlice";
import { ButtonsContainer } from "../../components/nav/ButtonsContainer";

const CryptoDetails: React.FC = () => {
  const [showFull, setShowFull] = useState(false);
  const navigate = useNavigate()
  const cryptoDetails = useAppSelector(selectDetails)
  const cryptoVariation = useAppSelector(selectVariation)
  const maxLength = 400
  const toggleDescription = () => {
    setShowFull(!showFull);
  }
  const renderData = () => (
    <section key={cryptoDetails.id} className="flex flex-col gap-4 w-full">
      {lineInfo("Market cap rank", "#", cryptoDetails.market_cap_rank)}
      {lineInfo("Price", "$", formatDollarValue(cryptoDetails.market_data.current_price.usd))}
      {lineInfo("High Price 24h", "$", formatDollarValue(cryptoDetails.market_data.high_24h.usd))}
      {lineInfo("Low Price 24h", "$", formatDollarValue(cryptoDetails.market_data.low_24h.usd))}
      {lineInfo("Price change 24h", "$", formatDollarValue(cryptoDetails.market_data.price_change_24h_in_currency.usd))}
    </section>
  )


  const lineInfo = (title: string, tag: string, content: string | number) => (
    <section className="flex border-b rounded-lg px-4 items-center py-1 gap-4 justify-between border-gray-600 w-full">
      <span className=" title">{title}:</span>
      <div className="flex gap-1 items-center subtitle">
        <span>{tag}</span>
        <span>{content}</span>
      </div>
    </section>

  )
  return (
    <>
      {
        cryptoDetails.id && (
          <section key={cryptoDetails.id} className=" flex  w-full  md:p-10 p-2 gap-4  flex-col h-fit min-h-full">
            <ButtonsContainer text="Homepage" handleClick={() => navigate("/")} />
            <div className="flex gap-2 items-center">
              <img
                src={cryptoDetails.image.large}
                alt={cryptoDetails.id}
                width={"30px"}
                height={"20px"}
                className="rounded-full"
              />
              <div>
                <span className="text-white text-lg font-bold tracking-wide"> {cryptoDetails.id}</span>
              </div>
            </div>
            <section className="h-full flex flex-col gap-6 w-full ">

              <section className="flex  flex-col   lg:justify-between gap-8  lg:h-2/4 lg:flex-row lg-min-h-2/4 ">
                {renderData()}
                <section className="w-full h-full relative  flex flex-col self-center">
                  <p className=" absolute right-8 -mt-5 text-sm border border-sky-900 bg-sky-900 px-2 rounded text-gray-300 lg:-mt-6">24h</p>
                  <Chart cryptoVariation={cryptoVariation} />
                </section>
              </section>
              <section className="flex flex-col m-4  items-center gap-2 h-fit ">
                <h1 className="title border-b border-gray-600 w-full text-start">About {cryptoDetails.id}</h1>

                <div className="w-full">
                  <p className="text-sm text-gray-400 leading-relaxed text-justify lg:text-left tracking-wide  w-full overflow-auto">
                    {showFull ? cryptoDetails.description.en : `${cryptoDetails.description.en.slice(0, maxLength)}${cryptoDetails.description.en.length > maxLength ? '...' : ''}`}
                    {cryptoDetails.description.en.length > maxLength && (
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

        )
      }
    </>
  );
}
export default CryptoDetails;