import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Add from "./Components/Add/Add";
import Man from "./Components/Man/Man";
import userdata from "./Data/data.json";

function App() {
  const [user, setUser] = useState([]);

  const [add,setAdd] = useState([]);

  useEffect(() => {
    setUser(userdata);
    console.log(userdata);
  }, []);

  const handleAddMan = (man) => {
    const newAdd =[...add,man];
    setAdd(newAdd);
  }


  return (
    <div className="App">
    
    <Add add={add}/>
      {user.map((man) => (
        <Man handleAddMan={handleAddMan} key={man.username} man={man}></Man>
      ))}
    </div>
  );
}

export default App;
