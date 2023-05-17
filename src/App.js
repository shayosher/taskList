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
  const [users, setUsers] = useState([{ userName: 'Nadav', password: '1234' }]);
  const [tasks, setTasks] = useState([{taskName:'1234',operator:'Nadav',description:'to do'}]);
  const [showMenu, setShowMenu] = useState(false);
  const [flag, setFlag] = useState(false);
  const show = () => {
    if (showMenu) {
      return <Menu setShowMenu={setShowMenu} />
    }
  }
  const deleteTask = (i) => {
    let deleteTask = tasks.filter((val, index) => (i != index));
    setTasks([...deleteTask]);
  }
  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path='/' element={<SignIn users={users} setShowMenu={setShowMenu} />} />
            <Route path='/allTasks' element={<AllTasks tasks={tasks} deleteTask={deleteTask}/>} />
            <Route path='/myTasks' element={<MyTasks />} />
            <Route path='/newTask' element={<NewTask />} />
            <Route path='/history' element={<History />} />
          </Routes>
          {show()}
        </HashRouter>
    </div>
  );
}

export default App;
