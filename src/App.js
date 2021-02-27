
import { useEffect, useState } from 'react';
import './App.css';
import userdata from './data.json'

function App() {

  const [user,setUser] = useState([]);

  useEffect(() =>{
    setUser(userdata);
    console.log(userdata);
  }, [])
  return (
    <div className="App">
    <h1>User profile</h1>

    </div>
  );
}

export default App;
