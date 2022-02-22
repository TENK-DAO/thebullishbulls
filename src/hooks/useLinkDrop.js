/* eslint-disable no-console */
import { useContext } from 'react';
import { generate as id } from 'shortid';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { GAS } from '../state/near';
import { appStore } from '../state/app';
import { getContract } from '../utils/near-utils';

const useLinkDrop = () => {
  const { state } = useContext(appStore);
  const { account, app, price } = state;
  const contract = getContract(account);

  const walletUrl = (contractId, key, url) =>
    `https://wallet.near.org/linkdrop/${contractId}/${key}?redirectUrl=${url}/my-nfts`;

  const createLinkDrop = async () => {
    const keyPair = KeyPairEd25519.fromRandom();
    const currentUrl = window.location.origin;
    const url = walletUrl(
      contract.contractId,
      keyPair.secretKey.toString(),
      currentUrl,
    );

    const { linkDropArray } = app;

    localStorage.setItem(
      `linkDropArray:${account.accountId}`,
      JSON.stringify([
        ...linkDropArray,
        {
          link: url,
          text: '',
          id: id(),
          isUsed: false,
        },
      ]),
    );

    const cost = price.costLinkDrop;

    try {
      await contract.create_linkdrop(
        { public_key: keyPair.getPublicKey().toString() },
        {
          gas: GAS,
          attachedDeposit: cost,
          walletCallbackUrl: `${currentUrl}/link-drop`,
        },
      );
    } catch (err) {
      console.log(err);
    }
  };
  return { createLinkDrop };
};

export default useLinkDrop;
