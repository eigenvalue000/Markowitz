import React from 'react';
import SingleStock from '../components/SingleStock';
import StockGraph from '../components/StockGraph';

const GraphList = ({ symbols }) => {
    if (!symbols.length) {
        return <h3>No Stocks Yet</h3>
    }

    return (
        symbols.map((stock) => (
            <StockGraph symbol={stock} />
        ))
    )
};

export default GraphList;