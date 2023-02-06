import React, { useState, useEffect } from "react"
import classnames from "classnames"

const Modal = ({ children, show, onClose }) => {

  const [deviceType, setDeviceType] = useState("desktop")
  const classNames = classnames("modal-wrapper", {
    "bottom-modal": deviceType === "mobile",
    "top-modal": deviceType === "desktop",
  })

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setDeviceType("mobile")
    } else {
      setDeviceType("desktop")
    }
  }, [])
  return (
    <>
      {show && (
        <div className={classNames}>
          <div className="modal">
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
