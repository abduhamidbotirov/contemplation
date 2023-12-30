import React from 'react';
import './index.css';

const Modal = ({ isOpen, onClose, content }) => {
    const handleClickInsideModal = (e) => {
        e.stopPropagation(); // Prevent the click event from propagating to the overlay
    };

    return (
        isOpen && (
            <div className="modal-overlay" onClick={onClose}>
                {/* <div className="modal-content" onClick={handleClickInsideModal}> */}
                {content}
                {/* <button className="close-btn" onClick={onClose}>
            Close Modal
          </button> */}
                {/* </div> */}
            </div>
        )
    );
};

export default Modal;
