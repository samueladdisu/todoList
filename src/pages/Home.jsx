import { useState, useEffect } from "react"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
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
import { BsFolderFill } from "react-icons/bs"
import { AiFillCalendar } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"
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
import "../styles/style.css"
import ModalInput from "../components/ModalInput"
import HeaderApp from "../components/HeaderApp"
import { Link } from "react-router-dom"
import axios from "axios"

const { Header, Sider, Content, Footer } = Layout

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [school, setSchool] = useState([])
  const [completeSchool, setCompleteSchool] = useState([])
  const [personal, setPersonal] = useState([])
  const [completePersonal, setCompletePersonal] = useState([])
  const [design, setDesign] = useState([])
  const [completeDesign, setCompleteDesign] = useState([])
  const [groceries, setGroceries] = useState([])
  const [completeGroceries, setCompleteGroceries] = useState([])

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/api/todos`)
      .then(res => {
        console.log(res.data)

        setSchool(res.data.filter(item => item.collection_id === 1))
        setCompleteSchool(res.data.filter(item => item.collection_id === 1 && item.completed === 1))

        setPersonal(res.data.filter(item => item.collection_id === 2))
        setCompletePersonal(res.data.filter(item => item.collection_id === 2 && item.completed === 1))


        setDesign(res.data.filter(item => item.collection_id === 3))
        setCompleteDesign(res.data.filter(item => item.collection_id === 3 && item.completed === 1))


        setGroceries(res.data.filter(item => item.collection_id === 4))
        setCompleteGroceries(res.data.filter(item => item.collection_id === 4 && item.completed === 1))
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <ModalInput show={showModal} onClose={handleCloseModal}>
        <Input
          style={{
            background: "transparent",
            color: "#fff",
            borderColor: "#414052",
          }}
        />
        <Space>
          <Button
            style={{
              background: "transparent",
              borderColor: "#414052",
              color: "#fff",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
            icon={
              <BsFolderFill
                style={{ marginRight: "0.5rem", color: "#AC6DDE" }}
              />
            }
          >
            {" "}
            Design{" "}
          </Button>
          <Button
            style={{
              background: "transparent",
              borderColor: "#414052",
              color: "#fff",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
            icon={
              <AiFillCalendar
                style={{ marginRight: "0.5rem", color: "#3FB970" }}
              />
            }
          >
            {" "}
            Today{" "}
          </Button>
          <Button
            style={{
              background: "transparent",
              borderColor: "#414052",
              color: "#fff",
              marginTop: "1rem",
            }}
            icon={
              <BsFillFlagFill
                style={{ marginRight: "0.5rem", color: "#EA4848" }}
              />
            }
          ></Button>
        </Space>
        <Row>
          <Button
            style={{
              background:
                "linear-gradient(21.86deg, #CB4BCF 30.51%, #FE8D8A 67.86%, #FE8D8A 91.71%)",
              color: "#fff",
              border: "none",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
          >
            Add Task
          </Button>
          <Button
            style={{
              background: "#414052",
              border: "none",
              color: "#fff",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </Row>
      </ModalInput>

      <HeaderApp home={false} />

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
                <Link to="/todos/1">
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
                        {completeSchool.length} / {school.length} done
                      </Typography.Text>
                      <VscLoading
                        size={20}
                        style={{ color: "#FA749F", transform: "scaleY(-1)" }}
                      />
                    </Row>
                  </Card>
                </Link>
              </Col>
              <Col span={12}>
                <Link to="/todos/2">
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
                        {completePersonal.length}/ {personal.length} done
                      </Typography.Text>
                      <VscLoading
                        size={20}
                        style={{ color: "#6DC5BE", transform: "scaleX(-1)" }}
                      />
                    </Row>
                  </Card>
                </Link>
              </Col>
              <Col span={12} style={{ marginTop: "1rem" }}>
                <Link to="/todos/3">
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
                        {completeDesign.length} / {design.length} done
                      </Typography.Text>
                      <BsFillCheckCircleFill
                        size={20}
                        style={{ color: "#AE70DE" }}
                      />
                    </Row>
                  </Card>
                </Link>
              </Col>
              <Col span={12} style={{ marginTop: "1rem" }}>
                <Link to="/todos/4">
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
                        {completeGroceries.length} / {groceries.length} done
                      </Typography.Text>
                      <VscLoading
                        size={20}
                        style={{ color: "#D0B555", transform: "scaleY(-1)" }}
                      />
                    </Row>
                  </Card>
                </Link>
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

        <div className="footer">
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
                onClick={handleOpenModal}
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
        </div>
      </Layout>
    </div>
  )
}

export default Home
