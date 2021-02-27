
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import userdata from './Data/data.json'


function App() {

  const [user,setUser] = useState([]);

  useEffect(() =>{
    setUser(userdata);
    console.log(userdata);
  }, [])
  return (
    <div className="App">

    <button className="btn btn-dark">dark</button>

    

    </div>
  );
}

export default App;
