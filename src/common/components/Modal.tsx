import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <hr className="my-4 border-t border-gray-300" />

        <div className="modal-content">{children}</div>

        {footer && (
          <>
            <hr className="my-4 border-t border-gray-300" />
            <div className="modal-footer flex justify-end space-x-4 mt-6">
              {footer}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
