import React, { useState, useEffect } from "react"
import { Modal, Input, Button, message, Space, Row, Col } from "antd"
import { BsFolder2Open } from "react-icons/bs"
import { AiOutlineCalendar } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"

const ModalCompo = ({ visible, setVisible, inputValue, setInputValue }) => {
  const [deviceType, setDeviceType] = useState("desktop")

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setDeviceType("mobile")
    } else {
      setDeviceType("desktop")
    }
  }, [])

  const handleOk = () => {
    setVisible(false)
    message.success(`The input value is: ${inputValue}`)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        type="primary"
        footer={null}
        wrapClassName={deviceType === "mobile" ? "bottom-modal" : "top-modal"}
      >
        <Input value={inputValue} onChange={handleInputChange} />
        <Space>
          <Button
            style={{
              background: "transparent",
              borderColor: "#414052",
              color: "#414052",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
            icon={<BsFolder2Open style={{ marginRight: "0.5rem" }} />}
          >
            {" "}
            Design{" "}
          </Button>
          <Button
            style={{
              background: "transparent",
              borderColor: "#414052",
              color: "#414052",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
            icon={<AiOutlineCalendar style={{ marginRight: "0.5rem" }} />}
          >
            {" "}
            Today{" "}
          </Button>
          <Button
            style={{
              background: "transparent",
              borderColor: "#414052",
              color: "#414052",
              marginTop: "1rem",
            }}
            icon={<BsFillFlagFill style={{ marginRight: "0.5rem" }} />}
          ></Button>
        </Space>
        <Button
          style={{
            background:
              "linear-gradient(21.86deg, #CB4BCF 30.51%, #FE8D8A 67.86%, #FE8D8A 91.71%)",
            color: "#fff",
            marginTop: "1rem",
            marginRight: "0.5rem",
          }}
        >
          Add Task
        </Button>
        <Button
          style={{
            background: "#414052",
            color: "#fff",
            marginTop: "1rem",
            marginRight: "0.5rem",
          }}
        >
          Cancel
        </Button>
      </Modal>
    </div>
  )
}

export default ModalCompo
