import React from 'react';

const OperationKeys = (props) => {

let arr = [`+`, `-`, `*`, `/`];

return(
    arr.map((op) =><button onClick={() => props.updateOperation(op)}>{op}</button>)    
);
}

export default OperationKeys;