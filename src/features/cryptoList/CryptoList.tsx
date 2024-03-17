import React from "react";
// import { selectCryptos } from "./cryptoListSlice";
// import { useAppSelector } from "../../app/hooks";
import { mock } from "./mock";
const List: React.FC = () => {
  // const cryptos = useAppSelector(selectCryptos)
  const renderData = mock.map(item => (
    <button key={item.id} className="flex border rounded mb-4 w-4/5 px-2 py-2 items-center gap-4 justify-between">
      <div className="flex gap-2  items-center ">
        <img src={item.image} alt={item.id} width={"50px"} height={"50px"} />
        <span>{item.id}</span>

      </div>
      <div className="border flex gap-2">
        <span>$</span>
        <span>{item.current_price}</span>
      </div>
    </button>
  ))
  return (
    <section className="border flex flex-col justify-center items-center py-6 w-4/5 self-center rounded-xl overflow-hidden h-full">
      {renderData}
    </section>
  );
}
export default List;