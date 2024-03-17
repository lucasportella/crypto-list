import React from "react";
import { selectCryptos } from "./cryptoListSlice";
import { useAppSelector } from "../../app/hooks";
const List: React.FC = () => {
  const cryptos = useAppSelector(selectCryptos)
  const renderData = cryptos.map(item => (
    <ul key={item.id} className="flex">
      <li><img src={item.image} alt={item.id} width={"50px"} height={"50px"} /></li>
      <li><span>{item.id}</span></li>
      <li><span>{item.current_price}</span></li>
    </ul>
  ))
  return (
    <section>
      {renderData}
    </section>
  );
}
export default List;