export const formatHour = (timestamp: number) => new Date(timestamp).toLocaleString([], { hour: '2-digit', minute: '2-digit' })

export const formatDollarValue = (value: number, decimalPlaces = 2) => {
  const formattedValue = value.toLocaleString('en-US', { maximumFractionDigits: decimalPlaces });
  return formattedValue;
};
