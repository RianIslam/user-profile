import React from "react";

const Man = (props) => {
  const { name, image, email, username, phone } = props.man;
  const {userStyle} ={width:'50px'}
  const manStyle ={border: '1px solid red', margin: '10px' ,padding: '10px'}
    const handleAddMan =props.handleAddMan;
  return (
    <div style={manStyle} className="">
      <div className="">
        <img src={image} style={userStyle} alt="" />
        <div className="">
          <h2 className="">{name}</h2>
          <h4 className=""> {username}</h4>
          <h4 className="">{email}</h4>
          <h4 className="">{phone}</h4>
          <button onClick={() => handleAddMan(props.name)} className="btn btn-outline-dark">Add Man</button>
        </div>
      </div>
    </div>
  );
};

export default Man;
