import { AiFillPieChart } from "react-icons/ai"
import { BiDesktop } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import { BsFillFlagFill } from "react-icons/bs"
import { AiFillCalendar } from "react-icons/ai"
import { BsFolderFill } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import {
  BsFillBookFill,
  BsFillPersonFill,
  BsFillBrushFill,
  BsFillCartFill,
} from "react-icons/bs"
import React, { useState, useEffect } from "react"
import {
  Layout,
  Menu,
  Row,
  Col,
  Typography,
  Space,
  Avatar,
  Card,
  Checkbox,
  Button,
  Input,
} from "antd"
import { Link, useParams } from "react-router-dom"
import { IoIosMore } from "react-icons/io"
import ModalInput from "../components/ModalInput"
import HeaderApp from "../components/HeaderApp"
import axios from "axios"
const { Header, Content, Footer, Sider } = Layout

function getItem(label, key, path, icon, children, type) {
  return {
    key,
    path,
    icon,
    children,
    label,
    type,
    style: { margin: "20px 0" },
  }
}
const items = [
  getItem(
    "School",
    "1",
    "1",
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
      style={{ background: "#FA749F" }}
    />
  ),
  getItem(
    "Personal",
    "2",
    "2",
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
      style={{ background: "#6DC5BE" }}
    />
  ),
  getItem(
    "Design",
    "3",
    "3",
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
      style={{ background: "#AE70DE" }}
    />
  ),
  getItem(
    "Groceries",
    "4",
    "4",
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
      style={{ background: "#D0B555" }}
    />
  ),
]

const Todos = () => {
  const [showModal, setShowModal] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [completedTodos, setCompletedTodos] = useState([])
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/todos/${id}`)
      .then(res => {
        console.log(res.data)
        const compTodos = []
        const incompTodos = []

        res.data.forEach(todo => {
          if (todo.completed === 1) {
            compTodos.push(todo)
          } else {
            incompTodos.push(todo)
          }
        })
        setCompletedTodos(compTodos)
        setIncompleteTodos(incompTodos)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <HeaderApp menu={true} />
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

      <Layout style={{ background: "#17181F", color: "#fff" }}>
        <div className="sidebar">
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={value => setCollapsed(value)}
            style={{
              background: "#20212C",
              color: "#fff",
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <Typography.Title
              level={4}
              style={{ color: "#fff", margin: "1rem 0 0 1rem" }}
            >
              Collections
            </Typography.Title>

            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              style={{ background: "#20212C", color: "#fff" }}
              inlineCollapsed={collapsed}
              items={items}
            >
              {items.map(item => (
                <Link to={`/todos/${item.path}`} key={item.key}>
                  <Menu.Item style={{ margin: "0 400px" }}  />
                </Link>
              ))}
            </Menu>
          </Sider>
        </div>
        <div className="container">
          <Content style={{ paddingTop: "2rem" }}>
            <Row>
              <Col span={20}>
                <Space align="middle">
                  <Link to="/">
                    <Avatar
                      shape="square"
                      icon={
                        <BiChevronLeft size={30} style={{ color: "#fff" }} />
                      }
                      style={{ background: "#20212C" }}
                    />
                  </Link>
                  <Typography.Title level={4} style={{ color: "#fff" }}>
                    School
                  </Typography.Title>
                </Space>
              </Col>
              <Col span={4}>
                <IoIosMore size={30} style={{ color: "#fff" }} />
              </Col>
            </Row>

            <Row style={{ marginTop: "2rem" }} gutter={[16, 10]}>
              <Col span={24}>
                <Typography.Text level={4} style={{ color: "#fff" }}>
                  Tasks - {incompleteTodos.length}
                </Typography.Text>
              </Col>

              <Col span={24}>
                {incompleteTodos.map(todo => (
                  <Card
                    style={{
                      background: "#20212C",
                      border: "none",
                      color: "#fff",
                      marginBottom: "1rem",
                    }}
                  >
                    <Avatar
                      shape="square"
                      style={{
                        background: "transparent",
                        border: "#FA749F solid 2px",
                        borderRadius: "12px",
                      }}
                    />
                    <Typography.Text
                      level={4}
                      style={{ color: "#fff", marginLeft: "1rem" }}
                    >
                      {todo.title}
                    </Typography.Text>
                  </Card>
                ))}
              </Col>

              <Col span={24}>
                <Typography.Text level={4} style={{ color: "#fff" }}>
                  Completed - {completedTodos.length}
                </Typography.Text>
              </Col>

              <Col span={24}>
                {completedTodos.map(todo => (
                  <Card
                    style={{
                      background: "#20212C",
                      border: "none",
                      color: "#fff",
                      marginBottom: "1rem",
                    }}
                  >
                    <Avatar
                      shape="square"
                      style={{
                        background: "#FA749F",
                        border: "#FA749F solid 2px",
                        borderRadius: "12px",
                      }}
                      icon={<AiOutlineCheck style={{ color: "black" }} />}
                    />
                    <Typography.Text
                      level={4}
                      style={{
                        color: "#fff",
                        marginLeft: "1rem",
                        textDecoration: "line-through",
                      }}
                    >
                      {todo.title}
                    </Typography.Text>
                  </Card>
                ))}
              </Col>
            </Row>
          </Content>
          <div className="footer">
            <Footer
              style={{
                position: "fixed",
                bottom: "0",
                background: "#17181F",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                transform: "translateX(-5%)",
              }}
            >
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
            </Footer>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Todos
