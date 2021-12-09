import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_STOCK } from '../utils/mutations';
import { UPDATE_PREVIOUS } from '../utils/mutations';

const UpdateStocks = ({symbols}) => {
  const [updateStock, {data}] = useMutation(UPDATE_STOCK);
  const [updatePrevious, {data1}] = useMutation(UPDATE_PREVIOUS);
  function onButtonClick() {
    symbols.map((symbol) => updateStock( { variables: {symbol: symbol} } ) );
    symbols.map((symbol) => updatePrevious( { variables: {symbol: symbol} }));
    window.location.reload(false);
  }
  return (
    <button
      onClick={onButtonClick}
     className="updateBtn" >UPDATE STOCKS</button>
  )
}

export default UpdateStocks;
