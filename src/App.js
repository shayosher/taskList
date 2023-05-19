import './App.css';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import AllTasks from './components/AllTasks';
import MyTasks from './components/MyTasks';
import NewTask from './components/NewTask';
import History from './components/History';
import Menu from './components/Menu';

function App() {
  const [users, setUsers] = useState([{ userName: 'nadav', password: '1234' },{ userName: 'itay', password: '1234' }]);
  const [tasks, setTasks] = useState([{taskName:'1',operator:'nadav',description:'to do'},{taskName:'2',operator:'nadav',description:'to do'},{taskName:'3',operator:'itay',description:'to do'}]);
  const [showMenu, setShowMenu] = useState(false);
  const [currentUser, setCuurrentUser] = useState();
  const [history, setHistory] = useState([]);
  const [flag, setFlag] = useState(false);
  const show = () => {
    if (showMenu) {
      return <Menu setShowMenu={setShowMenu} />
    }
  }
  const deleteTask = (tasktodelete) => {
    let deleteTask = tasks.filter((val) => (val != tasktodelete));
    setHistory([...history,tasktodelete])
    setTasks([...deleteTask]);
  }
  const addNewTask = (taskName,operator,description)=>{
    setTasks([...tasks,{taskName,operator,description}])
  }
  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path='/' element={<SignIn users={users} setShowMenu={setShowMenu} setCuurrentUser={setCuurrentUser}/>} />
            <Route path='/allTasks' element={<AllTasks tasks={tasks} deleteTask={deleteTask}/>} />
            <Route path='/myTasks' element={<MyTasks tasks={tasks} currentUser={currentUser} deleteTask={deleteTask}/>} />
            <Route path='/newTask' element={<NewTask addNewTask={addNewTask} users={users}/>} />
            <Route path='/history' element={<History history={history}/>} />
          </Routes>
          {show()}
        </HashRouter>
    </div>
  );
}

export default App;
