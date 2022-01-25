import React from 'react';
import { useERC20Balances, useMoralis } from 'react-moralis';

function SWAP() {
  const { account } = useMoralis();
  const { data: assets } = useERC20Balances();
  console.log('Balance', assets);
  return (
    <>
      <h1>Account: {account}</h1>
      <ul>
        {assets ? assets.map((token, index) => (
          <li key={index}>{token.name}: {token.balance}</li>
        )) : (<li>Not much</li>)}
      </ul>
    </>
  );
}

export default SWAP;