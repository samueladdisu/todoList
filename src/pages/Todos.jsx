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
  Button,
  Input,
  Radio,
} from "antd"
import { Link, useParams } from "react-router-dom"
import { IoIosMore } from "react-icons/io"
import ModalInput from "../components/ModalInput"
import HeaderApp from "../components/HeaderApp"
import axios from "axios"
import '../styles/style.css'

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

function longPressEvent(callback, ms = 500) {
  let timeout = null
  const start = () => (timeout = setTimeout(callback, ms))
  const stop = () => timeout && window.clearTimeout(timeout)

  return callback
    ? {
        onMouseDown: start,
        onMouseUp: stop,
        onMouseLeave: stop,
        onTouchStart: start,
        onTouchMove: stop,
        onTouchEnd: stop,
      }
    : {}
}

const items = [
  getItem(
    <Link to="/todos/1">School </Link>,
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
    <Link to="/todos/2">Personal </Link>,
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
    <Link to="/todos/3">Design </Link>,
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
    <Link to="/todos/4">Groceries </Link>,
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
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [completedTodos, setCompletedTodos] = useState([])
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)
  const { id } = useParams()
  const [text, setText] = useState("")
  const [selectedTodotext, setSelectedTodoText] = useState("")
  const [deletTodo, setDeleteTodo] = useState("")
  const [collection, setCollection] = useState("")
  const [completed, setCompleted] = useState(0);
  // long press functionality

  const handleLongPress = todo => {
    console.log(todo)
    setShowDeleteModal(true)
    setDeleteTodo(todo)
  }

  const updateTodo = () => {
    console.log(completed, "completed")
    axios
      .put(`http://localhost:3000/api/todos/${selectedTodo.id}`, {
        title: selectedTodotext,
        completed: completed,
        collection_id: id,
        // date: new Date()
      })
      .then(res => {
        setText("")
        fetchData()
        setShowModal(false)
        console.log(res, "resssssssssssssssssssssssssss")
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDoubleClick = todo => {
    console.log(todo, "edit")
    setShowModal(true)
    setSelectedTodo(todo)
    setSelectedTodoText(todo.title)
    setCompleted(todo.completed)
  }

  const handleCompleted = (e) => {
    console.log(e.target.value)
    setCompleted(e.target.value)
  }

  const deleteTaskHandler = () => {
    // console.log(deletTodo)
    axios
      .delete(`http://localhost:3000/api/todos/${deletTodo.id}`)
      .then(res => {
        console.log(res.data)
        setShowDeleteModal(false)
        fetchData()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const addTaskHandler = () => {
    console.log(text)
    axios
      .post("http://localhost:3000/api/todos", {
        title: text,
        // completed: 0,
        collection_id: id,
        date: new Date(),
      })
      .then(res => {
        setText("")
        fetchData()
        setShowModal(false)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const fetchData = () => {
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
  }
  useEffect(() => {
    fetchData()
    fetchCollection()
    console.log(collection)
  }, [id])

  const handleOpenModal = () => {
    setShowModal(true)
    setSelectedTodo(null)
  }
  const handeCloseDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const fetchCollection = () => {
    axios
      .get(`http://localhost:3000/api/collections/${id}`)
      .then(res => {
        console.log(res.data[0])
        setCollection(res.data[0].name)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

 

  return (
    <>
      <HeaderApp menu={true} home={true} onChildEvent={handleOpenModal} />
      {selectedTodo != null ? (
        <ModalInput show={showModal} onClose={handleCloseModal}>
          <Input
            placeholder="Add a task"
            value={selectedTodotext}
            onChange={e => setSelectedTodoText(e.target.value)}
            style={{
              background: "transparent",
              color: "#fff",
              borderColor: "#414052",
            }}
          />
          <Space>
            <Radio.Group type="dark" style={{ color: "red", marginTop: "1rem" }} onChange={handleCompleted} value={completed}>
              <Radio style={{ color: "#fff" }} value={1}>completed</Radio>
              <Radio style={{ color: "#fff" }} value={0}>incompleted</Radio>
            </Radio.Group>
          </Space>
          <Row>
            <Button
              onClick={updateTodo}
              style={{
                background:
                  "linear-gradient(21.86deg, #CB4BCF 30.51%, #FE8D8A 67.86%, #FE8D8A 91.71%)",
                color: "#fff",
                border: "none",
                marginTop: "1rem",
                marginRight: "0.5rem",
              }}
            >
              Update
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
      ) : (
        <ModalInput show={showModal} onClose={handleCloseModal}>
          <Typography.Text style={{ color: "#fff", marginBottom: "1rem" }}>
            Add a task
          </Typography.Text>
          <Input
            placeholder="Add a task"
            value={text}
            onChange={e => setText(e.target.value)}
            style={{
              background: "transparent",
              color: "#fff",
              borderColor: "#414052",
            }}
          />
          
          <Row>
            <Button
              onClick={addTaskHandler}
              style={{
                background:
                  "linear-gradient(21.86deg, #CB4BCF 30.51%, #FE8D8A 67.86%, #FE8D8A 91.71%)",
                color: "#fff",
                border: "none",
                marginTop: "1rem",
                marginRight: "0.5rem",
              }}
            >
              {selectedTodo != null ? "Update" : "Add"}
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
      )}

      <ModalInput show={showDeleteModal} onClose={handeCloseDeleteModal}>
        <Space>
          <Typography.Text style={{ color: "#fff" }}>
            Are you sure you want to delete this task?
          </Typography.Text>
        </Space>
        <Row>
          <Button
            onClick={deleteTaskHandler}
            style={{
              background:
                "linear-gradient(21.86deg, #CB4BCF 30.51%, #FE8D8A 67.86%, #FE8D8A 91.71%)",
              color: "#fff",
              border: "none",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
          >
            Delete
          </Button>
          <Button
            style={{
              background: "#414052",
              border: "none",
              color: "#fff",
              marginTop: "1rem",
              marginRight: "0.5rem",
            }}
            onClick={handeCloseDeleteModal}
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
              {/* {items.map(item => (
                
                <Link to={`/todos/${item.path}`} key={item.key}>
                  <p style={{ color: "#fff" }}>{ item.title }</p>
                  <Menu.Item style={{ margin: "0 400px" }}  />
                </Link>
              ))} */}
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
                    {collection}
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
                    {...longPressEvent(() => handleLongPress(todo))}
                    onDoubleClick={() => handleDoubleClick(todo)}
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
                    {...longPressEvent(() => handleLongPress(todo))}
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
