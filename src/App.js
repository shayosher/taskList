import './App.css';
import { useState,useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import AllTasks from './components/AllTasks';
import MyTasks from './components/MyTasks';
import NewTask from './components/NewTask';
import History from './components/History';
import Menu from './components/Menu';
import SignUp from './components/SignUp';

function App() {
  // const [users, setUsers] = useState([{ userName: 'nadav', password: '1234' }, { userName: 'itay', password: '1234' }]);
  // const [tasks, setTasks] = useState([{ taskName: '1', worker: 'nadav', description: 'to do' }, { taskName: '2', worker: 'nadav', description: 'to do' }, { taskName: '3', worker: 'itay', description: 'to do' }]);
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [currentUser, setCuurrentUser] = useState();
  const [history, setHistory] = useState([]);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  
  useEffect(()=>{
    fetch('/getTasksData')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setTasks(data)
    })
  },[flag1])

  useEffect(()=>{
    fetch('/getUsersData')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setUsers(data)
    })
  },[flag2])

  const addNewTask = (taskName, worker, description) => {
    // setTasks([...tasks,{taskName,worker,description}])
    let temp = {
      taskName,
      worker,
      description
    }
    fetch('/addTasksData', {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({
        tasktemp
      })
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setFlag1(!flag1)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const addNewUser = (userName,password)=>{
    // setUsers([...users,{userName,password}])
    let temp = {
      userName,
      password,
    }
    fetch('/addUsersData', {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({
        usertemp
      })
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setFlag2(!flag2)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const show = () => {
    if (showMenu) {
      return <Menu setShowMenu={setShowMenu} />
    }
  }
  const deleteTask = (tasktodelete) => {
    let deleteTask = tasks.filter((val) => (val != tasktodelete));
    setHistory([...history, tasktodelete])
    setTasks([...deleteTask]);
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<SignIn users={users} setShowMenu={setShowMenu} setCuurrentUser={setCuurrentUser} />} />
          <Route path='/signUp' element={<SignUp addNewUser={addNewUser}/>} />
          <Route path='/allTasks' element={<AllTasks tasks={tasks} deleteTask={deleteTask} />} />
          <Route path='/myTasks' element={<MyTasks tasks={tasks} currentUser={currentUser} deleteTask={deleteTask} />} />
          <Route path='/newTask' element={<NewTask addNewTask={addNewTask} users={users} />} />
          <Route path='/history' element={<History history={history} />} />
        </Routes>
        {show()}
      </HashRouter>
    </div>
  );
}

export default App;
