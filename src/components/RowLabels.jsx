import React from 'react';
import { dateNames } from '../constants';

const RowLabels = () => {
  return (
    <div className="row-label">
      {dateNames.map((dateName, index) => (
        <div key={index}>
          <pre>{dateName}</pre>
        </div>
      ))}
    </div>
  );
}

export default RowLabels;
