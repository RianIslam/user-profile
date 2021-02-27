import React from 'react'

const Add = (props) => {
    const add = props.add;
    // let totalAdded = 0;
    // for (let i = 0; i < add.length; i++) {
    //     const man = add[i];
    //     totalAdded = totalAdded +man.id;
    // }
    const totalAdded =add.reduce((add, man) => add +man.id,0)
    return (
        <div>
            <h3>this is add :{add.length}</h3>
            <h3>this {totalAdded}</h3>

        </div>
    )
}

export default Add
