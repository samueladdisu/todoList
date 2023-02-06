import { useState } from "react"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import {
  Layout,
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
import { IoIosMore } from "react-icons/io"
import { BsFillBookFill } from "react-icons/bs"
import { VscLoading } from "react-icons/vsc"
import { BsFillPersonFill } from "react-icons/bs"
import { BsFillBrushFill } from "react-icons/bs"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { BsFillCartFill } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { MdDashboard } from "react-icons/md"
import { CgCopy } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import { AiOutlineBell } from "react-icons/ai"
import "./styles/style.css"
import ModalCompo from "./components/ModalCompo"

const { Header, Sider, Content, Footer } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const triggerModal = () => {
    setShowModal(true)
  }

  return (
    <div>
      {showModal && (
        <ModalCompo
          visible={showModal}
          setVisible={setShowModal}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}

      <Layout style={{ background: "#17181F" }}>
        <div className="container">
          <Content style={{ background: "#17181F", paddingTop: "3rem" }}>
            <Row>
              <Col span={20}>
                <Typography.Title level={4} style={{ color: "#fff" }}>
                  Collections
                </Typography.Title>
              </Col>
              <Col span={4}>
                <IoIosMore size={30} style={{ color: "#fff" }} />
              </Col>
            </Row>

            <Row style={{ marginTop: "2rem" }}>
              <Space>
                <Button
                  style={{
                    background: "transparent",
                    borderColor: "#414052",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Favourites{" "}
                </Button>
                <Button
                  type="primary"
                  style={{ color: "#fff", border: "none" }}
                >
                  {" "}
                  All Collection{" "}
                </Button>
              </Space>
            </Row>

            <Row gutter={10} style={{ marginTop: "2rem" }}>
              <Col span={12}>
                <Card style={{ background: "#20212C", border: "none" }}>
                  <Avatar
                    shape="square"
                    icon={
                      <BsFillBookFill
                        size={30}
                        style={{
                          color: "#fff",
                          padding: "0.5rem",
                          lineHeight: "0",
                        }}
                      />
                    }
                    style={{ background: "#FA749F", marginBottom: "2rem" }}
                  />

                  <Typography.Title level={4} style={{ color: "#fff" }}>
                    School
                  </Typography.Title>
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography.Text style={{ color: "#5A5B64" }}>
                      4/8 done
                    </Typography.Text>
                    <VscLoading
                      size={20}
                      style={{ color: "#FA749F", transform: "scaleY(-1)" }}
                    />
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card style={{ background: "#20212C", border: "none" }}>
                  <Avatar
                    shape="square"
                    icon={
                      <BsFillPersonFill
                        size={30}
                        style={{
                          color: "#fff",
                          padding: "0.3rem",
                          lineHeight: "0",
                        }}
                      />
                    }
                    style={{ background: "#6DC5BE", marginBottom: "2rem" }}
                  />

                  <Typography.Title level={4} style={{ color: "#fff" }}>
                    Personal
                  </Typography.Title>
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography.Text style={{ color: "#5A5B64" }}>
                      3/5 done
                    </Typography.Text>
                    <VscLoading
                      size={20}
                      style={{ color: "#6DC5BE", transform: "scaleX(-1)" }}
                    />
                  </Row>
                </Card>
              </Col>
              <Col span={12} style={{ marginTop: "1rem" }}>
                <Card style={{ background: "#20212C", border: "none" }}>
                  <Avatar
                    shape="square"
                    icon={
                      <BsFillBrushFill
                        size={30}
                        style={{
                          color: "#fff",
                          padding: "0.5rem",
                          lineHeight: "0",
                        }}
                      />
                    }
                    style={{ background: "#AE70DE", marginBottom: "2rem" }}
                  />

                  <Typography.Title level={4} style={{ color: "#fff" }}>
                    Design
                  </Typography.Title>
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography.Text style={{ color: "#5A5B64" }}>
                      All 15 done
                    </Typography.Text>
                    <BsFillCheckCircleFill
                      size={20}
                      style={{ color: "#AE70DE" }}
                    />
                  </Row>
                </Card>
              </Col>
              <Col span={12} style={{ marginTop: "1rem" }}>
                <Card style={{ background: "#20212C", border: "none" }}>
                  <Avatar
                    shape="square"
                    icon={
                      <BsFillCartFill
                        size={30}
                        style={{
                          color: "#fff",
                          padding: "0.5rem",
                          lineHeight: "0",
                        }}
                      />
                    }
                    style={{ background: "#D0B555", marginBottom: "2rem" }}
                  />

                  <Typography.Title level={4} style={{ color: "#fff" }}>
                    Groceries
                  </Typography.Title>
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography.Text style={{ color: "#5A5B64" }}>
                      2/10 done
                    </Typography.Text>
                    <VscLoading
                      size={20}
                      style={{ color: "#D0B555", transform: "scaleY(-1)" }}
                    />
                  </Row>
                </Card>
              </Col>

              <Col span={12} style={{ marginTop: "1rem" }}>
                <Card
                  style={{
                    background: "transparent",
                    borderColor: "#414052",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <AiOutlinePlus size={20} style={{ color: "#fff" }} />
                </Card>
              </Col>
            </Row>
          </Content>
        </div>

        <Footer
          style={{
            position: "fixed",
            bottom: "0",
            background: "#17181F",
            width: "100%",
          }}
        >
          <Space
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MdDashboard size={25} style={{ color: "#fff" }} />
            <CgCopy size={25} style={{ color: "#fff" }} />
            <Avatar
              onClick={triggerModal}
              shape="square"
              size={50}
              icon={
                <AiOutlinePlus
                  size={40}
                  style={{
                    color: "#fff",
                    padding: "0.5rem",
                    lineHeight: "0",
                  }}
                />
              }
              style={{
                background:
                  "linear-gradient(21.86deg, #CB4BCF 30.51%, #FE8D8A 67.86%, #FE8D8A 91.71%)",
                lineHeight: "0",
                borderRadius: "10px",
              }}
            />
            <BsSearch
              size={25}
              style={{ color: "#fff", justifySelf: "flex-end" }}
            />
            <AiOutlineBell
              size={25}
              style={{ color: "#fff", justifySelf: "flex-end" }}
            />
          </Space>
        </Footer>
      </Layout>
    </div>
  )
}

export default App
