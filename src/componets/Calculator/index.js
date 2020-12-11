import React, {useState} from  'react';

import NumberKeys from '../NumberKeys'
import OperationKeys from  '../OperactionKeys'

const Calculator = () => {
    const [input1, updateInput1] = useState(0)
    const [input2, updateInput2] = useState(0)
    const [operation, updateOperation] = useState()

    let answer = '';

    const calculate = () => {
        if (operation) {
            if (operation === "+") {
                answer = input1 + input2;
            } else if (operation === "-") {
                answer = input1 - input2;
            } else if (operation === "*") {
                answer = input1 * input2;
            } else if (operation === "/") {
                answer = input1 / input2;
            }
        } else {
            answer = 'NaN';
        }

        updateInput1(0);
        updateInput2(0);
        updateOperation()
        alert(answer)
    }

    return(
        <>
        <div>
        <span>choosen values</span>
        <span>'input1': {input1}</span>
        <span>'input2': {input2}</span>
        <span>'operator': {operation}</span>
    </div>

        <div className="calculator-app">
            <NumberKeys input1={input1} input2={input2} updateInput1={updateInput1} updateInput2={updateInput2} operation={operation}/>
            <OperationKeys updateOperation={updateOperation}/>
            <button onClick={() => calculate()}>=</button>
        </div>
        </>
    );
}

export default Calculator;