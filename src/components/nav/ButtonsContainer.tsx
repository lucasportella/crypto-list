import { Wallet } from "../../features/wallet/Wallet";
import { useAppSelector } from "../../app/hooks"
import { selectConnected } from "../../features/wallet/walletSlice"
import React from "react";
interface ButtonContainerProps {
  handleClick?: () => void;
  text: string;

}
export const ButtonsContainer: React.FC<ButtonContainerProps> = ({ handleClick, text }) => {
  const connected = useAppSelector(selectConnected)
  return (
    <div className={`flex w-full gap-2  ${connected ? "flex-col" : "justify-between"}`}>
      <Wallet />
      <button className="home-button w-fit h-fit" onClick={handleClick}>{text}</button>
    </div>
  )
}
