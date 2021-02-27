
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Man from './Components/Man/Man';
import userdata from './Data/data.json'


function App() {

  const [user,setUser] = useState([]);

  useEffect(() =>{
    setUser(userdata);
    console.log(userdata);
    const man = userdata.map(user => user.name);
    console.log(man)
  }, [])
  return (
    <div className="App">

    <button className="btn btn-dark">hello</button>
    <ul>
      {
        user.map(man =><Man man={man}></Man>)
      }
    </ul>
    
    

    </div>
  );
}

export default App;
