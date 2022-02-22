const contractName = process.env.REACT_APP_CONTRACT_NAME ||'thebullishbulls.near';

export default function getConfig() {
  const config = {
    networkId: 'mainnet',
    nodeUrl: 'https://rpc.mainnet.near.org',
    walletUrl: 'https://wallet.near.org',
    helperUrl: 'https://helper.mainnet.near.org',
    contractName,
    GAS: '200000000000000',
    DEFAULT_NEW_ACCOUNT_AMOUNT: '5',
  };

  // if (process.env.REACT_APP_ENV === 'prod') {
  // config = {
  //  ...config,
  //  networkId: 'mainnet',
  //  nodeUrl: 'https://rpc.mainnet.near.org',
  //  walletUrl: 'https://wallet.near.org',
  //  helperUrl: 'https://helper.mainnet.near.org',
  // };
  // }

  return config;
}
