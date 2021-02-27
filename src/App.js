import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Man from "./Components/Man/Man";
import userdata from "./Data/data.json";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(userdata);
    console.log(userdata);
  }, []);

  const handleAddMan = () => {console.log('kelbo'}


  return (
    <div className="App">
      {user.map((man) => (
        <Man handleAddMan={handleAddMan} key={man.username} man={man}></Man>
      ))}
    </div>
  );
}

export default App;
