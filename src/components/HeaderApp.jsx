import React, { useState, useEffect} from "react"
import {
  Layout,
  Input,
  Menu,
  theme,
  Col,
  Row,
  Typography,
  Space,
  Button,
  Card,
  Avatar,
} from "antd"
import { MdDashboard } from "react-icons/md"
import { CgCopy } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { RxAvatar } from "react-icons/rx"
import { AiOutlineBell } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"
import "../styles/style.css"
import { Link, useParams } from "react-router-dom"
function HeaderApp({ menu, onChildEvent, home }) {

  const { id } = useParams()

  const handleHeader = () => {
    onChildEvent()
  }





  return (
    <>
      <div className="header">
        <Row align="middle">
          <Col span={6}>
            <Space size={32}>
              {menu && <AiOutlineMenu style={{ color: "#fff" }} />}
              <Space>
                
                <MdDashboard size={25} style={{ color: "#fff" }} />
                <Link to="/">
                <Typography.Text style={{ color: "#fff" }}>
                  Dashboard
                </Typography.Text>
                </Link>
              </Space>
              <Space>
                <CgCopy size={25} style={{ color: "#fff" }} />
                <Link to="/todos/1">
                <Typography.Text style={{ color: "#fff" }}>
                  Collections
                </Typography.Text>
                </Link>
              </Space>
            </Space>
          </Col>

          <Col span={4} offset={14}>
            <Space size={32}>
              { home && (
                <Avatar
                shape="square"
                onClick={handleHeader}
                size={30}
                icon={
                  <AiOutlinePlus
                    size={20}
                    style={{
                      color: "#fff",
                      lineHeight: "0",
                      paddingTop: "5px",
                    }}
                  />
                }
                style={{
                  background:
                    "linear-gradient(21.86deg, #CB4BCF 30.51%, #FE8D8A 67.86%, #FE8D8A 91.71%)",
                  lineHeight: "0",
                  borderRadius: "10px",
                  padding: '0'
                }}
              />
              )}
              
              <BsSearch
                size={18}
                style={{ color: "#fff", justifySelf: "flex-end" }}
              />
              <AiOutlineBell
                size={20}
                style={{ color: "#fff", justifySelf: "flex-end" }}
              />
              <RxAvatar
                size={20}
                style={{ color: "#fff", justifySelf: "flex-end" }}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HeaderApp
