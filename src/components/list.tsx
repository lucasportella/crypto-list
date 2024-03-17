// import React from "react";
// import { useAppSelector } from "../app/hooks";
// import { selectCryptos } from "../features/cryptoList/cryptoListSlice";
// const List: React.FC = () => {
//   const cryptos = useAppSelector(selectCryptos)
//   const renderData = cryptos.map(item => (
//     <ul key={item.id}>
//       <li><img src={item.image} alt={item.id} width={"50px"} height={"50px"} /></li>
//       <li><span>{item.id}</span></li>
//       <li><span>{item.current_price}</span></li>
//     </ul>
//   ))
//   return (
//     <section>
//       {renderData}
//     </section>
//   );
// }
// export default List;