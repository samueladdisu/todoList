import React, { useState, useEffect } from "react"

const Modal = ({ children, show, onClose }) => {

  return (
    <>
      {show && (
        <div className="modal-wrapper">
          <div className="modal">
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
