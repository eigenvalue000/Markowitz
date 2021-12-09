import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_STOCK } from '../utils/mutations';

const UpdateStocks = ({symbols}) => {
  const [updateStock, {data}] = useMutation(UPDATE_STOCK);

  function onButtonClick() {
    symbols.map((symbol) => updateStock( { variables: {symbol: symbol} } ) );
    window.location.reload(false);
  }
  return (
    <button
      onClick={onButtonClick}
     className="updateBtn" >UPDATE STOCKS</button>
  )
}

export default UpdateStocks;
