import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BuyMoreBtn from '../../BuyMoreBtn';
import useBuy from '../../../hooks/useBuy';
import CountAndPrice from './CountAndPrice';

const BuyMore = ({ isLinkDrop }) => {
  const {
    text,
    count,
    state,
    showMessage,
    showCountAnimation,
    handleClick,
    handleNumberClick,
  } = useBuy(isLinkDrop);

  const { price, app } = state;

  const moreThenManyCount = app.tokensLeft >= app.manyCount;
  const textForMessage = moreThenManyCount
    ? `select ${app.oneCount} or ${app.manyCount} Bullish Bulls`
    : `select ${app.oneCount} Bullish Bulls`;

  return (
    <div className="buy-more">
      <div className="buy-more__top">
        

        {showMessage && (
          <div
            className="buy-more__message"
            style={{
              transform: `translateX(${
                isLinkDrop || moreThenManyCount ? '0' : '-25px'
              })`,
            }}
          >
            {isLinkDrop ? 'select 1 link drop' : textForMessage}
          </div>
        )}
        {isLinkDrop && (
          <p className="buy-more__top-text">
            Share a mystery NFT for your friend
          </p>
        )}
      </div>

      <div className="buy-more__center">
        <CountAndPrice
          activeCount={count}
          handleNumberClick={handleNumberClick}
          showAnimation={showCountAnimation}
          price={price}
          currentCount={app.oneCount}
        />
      </div>

      {/* Show this block only for NFT and only if tokens left more or equal manyCount ( 10 in our case ) */}
      <BuyMoreBtn className="buy-more-btn-2" text={text} onClick={handleClick} />
    </div>
  );
};

BuyMore.propTypes = {
  isLinkDrop: PropTypes.bool,
};

BuyMore.defaultProps = {
  isLinkDrop: false,
};

export default memo(BuyMore);
