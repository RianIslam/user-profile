import React from 'react'

const Man = (props) => {
    return (
        <div>
            <h4>This is {props.man.name}</h4>

            <div className="card" Style={"width: 18rem;"}>
  <img src={props.man.image} className="card-img-top" />
  <div className="card-body">
    <p className="card-text">{props.man.email}</p>
  </div>
</div>



            

        </div>
    )
}

export default Man
