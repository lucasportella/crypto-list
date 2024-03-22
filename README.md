# Crypto List
This project aims to fetch the most valuated cryptos in the market and provide the option for the user to connect his wallets and show it's balances.

## How to run
This app is deployed at [https://crypto-list-omega.vercel.app/](https://crypto-list-omega.vercel.app/)

If you want to run on your computer the steps are:
- Install node
- git clone the repository
- go to the src folder
- npm install
- npm run dev
- bonus: create Coin Gecko [API Key](https://support.coingecko.com/hc/en-us/articles/21880397454233-User-Guide-How-to-sign-up-for-CoinGecko-Demo-API-and-generate-an-API-key) and add it to the .env file so it avoids getting your browser blocked from fetching data

## Features
- Shows top 10 crypto with refresh button
- Crypto details page with chart
- Connect any Ethereum wallet through the EIP 6963 protocol (supports multi wallet)
- Shows user Ethereum balance

## Details page with chart
![image](https://github.com/lucasportella/crypto-list/assets/63923113/655adf9f-ff48-4e85-89f0-73b908d9e386)


## Multi Wallet implementation
![image](https://github.com/lucasportella/crypto-list/assets/63923113/562489d2-ff45-4882-9244-583b22bb7a03)
