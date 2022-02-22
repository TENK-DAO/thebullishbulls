/* eslint-disable no-alert */
import { useContext } from 'react';
import { NEAR, Gas } from "near-units";
import { appStore } from '../state/app';
import { getContract } from "../utils/near-utils";

const useMintNft = () => {
  const { state } = useContext(appStore);
  const { account, price } = state;
  const contract = getContract(account);

  const mintNft = async (count = 1) => {
    const walletCallbackUrl = `${window.location.origin}/my-nfts`;
    await contract.nft_mint_one(
      {},
      {
        gas: Gas.parse("150 Tgas").mul(Gas.from(count)),
        attachedDeposit: price.oneNFT.mul(NEAR.from(count)),
        walletCallbackUrl,
      }
    );
  };

  return { mintNft };
};

export default useMintNft;
