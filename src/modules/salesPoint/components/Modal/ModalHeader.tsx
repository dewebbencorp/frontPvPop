import React from "react";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-red-600">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default ModalHeader;
