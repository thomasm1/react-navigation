
import React from 'react';
import {Table   } from 'react-materialize';


export default () => ( 
<Table>
  <thead>
    <tr>
      <th data-field="id">Name</th>
      <th data-field="name">Item Name</th>
      <th data-field="price">Item Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alvin</td>
      <td>Eclair</td>
      <td>$0.87</td>
    </tr>
  </tbody>
</Table>
)