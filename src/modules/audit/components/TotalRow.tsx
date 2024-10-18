import React from 'react';

interface TotalRowProps {
  label: string;
  value: number;
}

const TotalRow: React.FC<TotalRowProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <span>{label}:</span>
      <span>${value.toFixed(2)}</span>
    </div>
  );
};

export default TotalRow;
