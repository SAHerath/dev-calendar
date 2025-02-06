import React from 'react';

const EmptyBoxes = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={`empty-${index}`} className="date-box"></div>
      ))}
    </>
  );
}

export default EmptyBoxes;
