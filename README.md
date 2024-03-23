# Crypto List
This project aims to fetch the most valuated cryptos in the market and provide the option for the user to connect his wallets and show it's balances.

## Development
Although very small and simple, I decided to use Redux for state management since it's been a long time that I have used that library and it was my first contact to the toolkit. Simple CSS styles through Tailwind, which is a very easy to learn but powerful library. Coin Gecko API was used to fetch data. To connect to Ethereum wallets I used the most recent protocol which is the EIP 6963. No libraries like Web3 js were used to handle the connection to the crpyto Networks, only ethers lib was used once to decode the balance response.  Vitest and RTL were used for tests.

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

<!--
&lt;--- Readme.md Snippet without images Start ---&gt;
## Tech Stack
lucasportella/crypto-list is built on the following main stack:

- [TypeScript](http://www.typescriptlang.org) – Languages
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Languages
- [Autoprefixer](https://github.com/postcss/autoprefixer) – CSS Pre-processors / Extensions
- [PostCSS](https://github.com/postcss/postcss) – CSS Pre-processors / Extensions
- [React](https://reactjs.org/) – Javascript UI Libraries
- [React Router](https://github.com/rackt/react-router) – JavaScript Framework Components
- [Recharts](http://recharts.org/) – Charting Libraries
- [Redux](https://redux.js.org/) – State Management Library
- [Tailwind CSS](https://tailwindcss.com) – Front-End Frameworks
- [ESLint](http://eslint.org/) – Code Review
- [Vite](https://vitejs.dev/) – JS Build Tools / JS Task Runners
- [jsdom](https://github.com/jsdom/jsdom) – Headless Browsers

Full tech stack [here](/techstack.md)

&lt;--- Readme.md Snippet without images End ---&gt;

&lt;--- Readme.md Snippet with images Start ---&gt;
## Tech Stack
lucasportella/crypto-list is built on the following main stack:

- <img width='25' height='25' src='https://img.stackshare.io/service/1612/bynNY5dJ.jpg' alt='TypeScript'/> [TypeScript](http://www.typescriptlang.org) – Languages
- <img width='25' height='25' src='https://img.stackshare.io/service/1209/javascript.jpeg' alt='JavaScript'/> [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Languages
- <img width='25' height='25' src='https://img.stackshare.io/service/2202/72d087642cfce6fef6f2dabec5bf49e8_400x400.png' alt='Autoprefixer'/> [Autoprefixer](https://github.com/postcss/autoprefixer) – CSS Pre-processors / Extensions
- <img width='25' height='25' src='https://img.stackshare.io/service/3339/rlFcjEdI.png' alt='PostCSS'/> [PostCSS](https://github.com/postcss/postcss) – CSS Pre-processors / Extensions
- <img width='25' height='25' src='https://img.stackshare.io/service/1020/OYIaJ1KK.png' alt='React'/> [React](https://reactjs.org/) – Javascript UI Libraries
- <img width='25' height='25' src='https://img.stackshare.io/service/3350/8261421.png' alt='React Router'/> [React Router](https://github.com/rackt/react-router) – JavaScript Framework Components
- <img width='25' height='25' src='https://img.stackshare.io/service/5608/13690587.png' alt='Recharts'/> [Recharts](http://recharts.org/) – Charting Libraries
- <img width='25' height='25' src='https://img.stackshare.io/service/4074/13142323.png' alt='Redux'/> [Redux](https://redux.js.org/) – State Management Library
- <img width='25' height='25' src='https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png' alt='Tailwind CSS'/> [Tailwind CSS](https://tailwindcss.com) – Front-End Frameworks
- <img width='25' height='25' src='https://img.stackshare.io/service/3337/Q4L7Jncy.jpg' alt='ESLint'/> [ESLint](http://eslint.org/) – Code Review
- <img width='25' height='25' src='https://img.stackshare.io/service/21547/default_1aeac791cde11ff66cc0b20dcc6144eeb185c905.png' alt='Vite'/> [Vite](https://vitejs.dev/) – JS Build Tools / JS Task Runners
- <img width='25' height='25' src='https://img.stackshare.io/service/7054/preview.jpeg' alt='jsdom'/> [jsdom](https://github.com/jsdom/jsdom) – Headless Browsers

Full tech stack [here](/techstack.md)

&lt;--- Readme.md Snippet with images End ---&gt;
-->
<div align="center">

# Tech Stack File
![](https://img.stackshare.io/repo.svg "repo") [lucasportella/crypto-list](https://github.com/lucasportella/crypto-list)![](https://img.stackshare.io/public_badge.svg "public")
<br/><br/>
|28<br/>Tools used|03/22/24 <br/>Report generated|
|------|------|
</div>

## <img src='https://img.stackshare.io/languages.svg'/> Languages (3)
<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1612/bynNY5dJ.jpg' alt='TypeScript'>
  <br>
  <sub><a href="http://www.typescriptlang.org">TypeScript</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/6727/css.png' alt='CSS 3'>
  <br>
  <sub><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">CSS 3</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1209/javascript.jpeg' alt='JavaScript'>
  <br>
  <sub><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

## <img src='https://img.stackshare.io/frameworks.svg'/> Frameworks (7)
<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/2202/72d087642cfce6fef6f2dabec5bf49e8_400x400.png' alt='Autoprefixer'>
  <br>
  <sub><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/3339/rlFcjEdI.png' alt='PostCSS'>
  <br>
  <sub><a href="https://github.com/postcss/postcss">PostCSS</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1020/OYIaJ1KK.png' alt='React'>
  <br>
  <sub><a href="https://reactjs.org/">React</a></sub>
  <br>
  <sub>v18.2.0</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/3350/8261421.png' alt='React Router'>
  <br>
  <sub><a href="https://github.com/rackt/react-router">React Router</a></sub>
  <br>
  <sub>v6.22.3</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/5608/13690587.png' alt='Recharts'>
  <br>
  <sub><a href="http://recharts.org/">Recharts</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/4074/13142323.png' alt='Redux'>
  <br>
  <sub><a href="https://redux.js.org/">Redux</a></sub>
  <br>
  <sub>v5.0.1</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png' alt='Tailwind CSS'>
  <br>
  <sub><a href="https://tailwindcss.com">Tailwind CSS</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>

## <img src='https://img.stackshare.io/devops.svg'/> DevOps (5)
<table><tr>
  <td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/3337/Q4L7Jncy.jpg' alt='ESLint'>
  <br>
  <sub><a href="http://eslint.org/">ESLint</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1046/git.png' alt='Git'>
  <br>
  <sub><a href="http://git-scm.com/">Git</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/21547/default_1aeac791cde11ff66cc0b20dcc6144eeb185c905.png' alt='Vite'>
  <br>
  <sub><a href="https://vitejs.dev/">Vite</a></sub>
  <br>
  <sub></sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/7054/preview.jpeg' alt='jsdom'>
  <br>
  <sub><a href="https://github.com/jsdom/jsdom">jsdom</a></sub>
  <br>
  <sub>v24.0.0</sub>
</td>

<td align='center'>
  <img width='36' height='36' src='https://img.stackshare.io/service/1120/lejvzrnlpb308aftn31u.png' alt='npm'>
  <br>
  <sub><a href="https://www.npmjs.com/">npm</a></sub>
  <br>
  <sub></sub>
</td>

</tr>
</table>


## <img src='https://img.stackshare.io/group.svg' /> Open source packages (13)</h2>

## <img width='24' height='24' src='https://img.stackshare.io/service/1120/lejvzrnlpb308aftn31u.png'/> npm (13)

|NAME|VERSION|LAST UPDATED|LAST UPDATED BY|LICENSE|VULNERABILITIES|
|:------|:------|:------|:------|:------|:------|
|[@testing-library/jest-dom](https://www.npmjs.com/@testing-library/jest-dom)|v6.4.2|03/22/24|lucas |MIT|N/A|
|[@testing-library/react](https://www.npmjs.com/@testing-library/react)|v14.2.2|03/22/24|lucas |MIT|N/A|
|[@types/react](https://www.npmjs.com/@types/react)|v18.2.66|03/22/24|lucas |MIT|N/A|
|[@types/react-dom](https://www.npmjs.com/@types/react-dom)|v18.2.22|03/22/24|lucas |MIT|N/A|
|[@typescript-eslint/eslint-plugin](https://www.npmjs.com/@typescript-eslint/eslint-plugin)|v7.2.0|03/15/24|lucas |MIT|N/A|
|[@typescript-eslint/parser](https://www.npmjs.com/@typescript-eslint/parser)|v7.2.0|03/15/24|lucas |BSD-2-Clause|N/A|
|[eslint-plugin-react-hooks](https://www.npmjs.com/eslint-plugin-react-hooks)|v4.6.0|03/22/24|lucas |MIT|N/A|
|[ethers](https://www.npmjs.com/ethers)|v6.11.1|03/18/24|Lucas Portella |MIT|N/A|
|[react-dom](https://www.npmjs.com/react-dom)|v18.2.0|03/22/24|lucas |MIT|N/A|
|[react-redux](https://www.npmjs.com/react-redux)|v9.1.0|03/22/24|lucas |MIT|N/A|
|[react-router-dom](https://www.npmjs.com/react-router-dom)|v6.22.3|03/22/24|lucas |MIT|N/A|
|[tailwindcss](https://www.npmjs.com/tailwindcss)|v3.4.1|03/17/24|lucas |MIT|N/A|
|[vite](https://www.npmjs.com/vite)|v5.1.6|03/22/24|lucas |N/A|N/A|

<br/>
<div align='center'>

Generated via [Stack File](https://github.com/marketplace/stack-file)
