import React from 'react';

export default function Portfolio() {
  return (
    <div>
    <div className="stock-table">
      <table>
        <tr>
          <th>Stock</th>
          <th>Price</th>
          <th>History</th>
          <th>Variance</th>
        </tr>
        <tr>
          <td>ABC</td>
          <td>$123</td>
          <td>+123</td>
          <td>123</td>
        </tr>
        <tr>
          <td>DEF</td>
          <td>$123</td>
          <td>+123</td>
          <td>123</td>
        </tr>
        <tr>
          <td>GHI</td>
          <td>$123</td>
          <td>+123</td>
          <td>123</td>
        </tr>
        <tr>
          <td>JKL</td>
          <td>$123</td>
          <td>+123</td>
          <td>123</td>
        </tr>
        <tr>
          <td>MNO</td>
          <td>$123</td>
          <td>+123</td>
          <td>123</td>
        </tr>
      </table>
    </div>

    <div className="selected-stock-info">
      <div className="stock-header-name">
        <h2>ABC - The American Brocasting Corporation</h2>
        <img src="https://image.shutterstock.com/image-vector/simple-infographic-line-chart-sky-260nw-534979027.jpg" alt="temp-graph" />
      </div>
    </div>
</div>
  );
}
