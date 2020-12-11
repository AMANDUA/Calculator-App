import React from 'react';

const NumberKey = (props) => {

let arr = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9];

const updateInputs = (num) => {
    if(!props.operation) {
        const input1 = (props.input1 * 10) + num;
        props.updateInput1(input1);
    } else {
        const input2 = (props.input2 * 10) + num;
        props.updateInput2(input2);
    }
}

return(
    arr.map((num) =><button onClick={() => updateInputs(num)}>{num}</button>)      
);
}

export default NumberKey;