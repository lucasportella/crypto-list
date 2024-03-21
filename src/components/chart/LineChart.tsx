import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { formatDollarValue, formatHour } from "../../utils/formatString";
import { ICryptoVariation } from "../../api/coingecko/cryptoVariation";
// import { useAppDispatch } from "../../app/hooks";
// import { selectStatus } from "../../features/cryptoVariation/cryptoVariationSlice";
export interface IChart {
  time: string,
  price: number,
  market_caps: number,
  volume: string
}
export interface CustomTooltipProps {
  active?: boolean;
  payload?: payload[];
}
export interface payload {
  payload: IChart
}
interface cryptoVariation {
  cryptoVariation: ICryptoVariation
}
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { time, price, volume } = payload[0].payload;
    return (
      <div className="tooltipStyles">
        <p >{`Hour: ${time}`}</p>
        <p>{`Price: $${formatDollarValue(price)}`}</p>
        <p>{`Volume: $${volume}`}</p>
      </div>
    );
  }
  return null;
};
const Chart: React.FC<cryptoVariation> = (priceData) => {
  // const status = useAppDispatch(selectStatus)
  const data = priceData.cryptoVariation.prices.map((item, index) => (

    {
      time: formatHour(item[0]),
      price: item[1],
      market_caps: priceData.cryptoVariation.market_caps[index][1],
      volume: formatDollarValue(priceData.cryptoVariation.total_volumes[index][1])
    }
  ))
  const minYValue = Math.min(...data.map(entry => Math.min(entry.price)));
  const maxYValue = Math.max(...data.map(entry => Math.max(entry.price)));
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <YAxis dataKey="price" domain={[minYValue, maxYValue]} hide={true} />
        <CartesianGrid strokeDasharray="1 2" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="time" stroke="#82ca9d" dot={false} />
        <Line type="monotone" dataKey="volume" stroke="#ffc658" dot={false} />
      </LineChart>

    </ResponsiveContainer>
  );
}
export default Chart;