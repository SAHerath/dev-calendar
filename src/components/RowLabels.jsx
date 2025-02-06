import React from 'react';

const RowLabels = ({dateNames}) => {
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
