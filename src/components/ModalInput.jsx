import React, { useState, useEffect } from "react"
import classnames from "classnames"

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
