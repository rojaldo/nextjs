'use client';

import { useState } from 'react';
import './calculator.css';
import { CalculatorEngine } from '../models/calculatorengine';



export default function CalculatorComponent() {
    const [display, setDisplay] = useState('');

    const [calculatorEngine] = useState<CalculatorEngine>(new CalculatorEngine());

    const handleInput = (value: string | number) => {
        if (typeof value === 'number') {
            setDisplay(calculatorEngine.processNumber(value));
        }else if (typeof value === 'string') {
            setDisplay(calculatorEngine.processSymbol(value));
        }
    }

    return (
        <div className="my-calculator">
            <div className="calculator">
                <div className="input" id="input" >{display}</div>
                <div className="buttons">
                    <div className="operators">
                        <div onClick={()=>{handleInput('+')}}>+</div>
                        <div onClick={()=>{handleInput('-')}}>-</div>
                        <div onClick={()=>{handleInput('*')}}>&times;</div>
                        <div onClick={()=>{handleInput('/')}}>&divide;</div>
                    </div>
                    <div className="leftPanel">
                        <div className="numbers">
                            <div onClick={()=>{handleInput(7)}}>7</div>
                            <div onClick={()=>{handleInput(8)}}>8</div>
                            <div onClick={()=>{handleInput(9)}}>9</div>
                        </div>
                        <div className="numbers">
                            <div onClick={()=>{handleInput(4)}}>4</div>
                            <div onClick={()=>{handleInput(5)}}>5</div>
                            <div onClick={()=>{handleInput(6)}}>6</div>
                        </div>
                        <div className="numbers">
                            <div onClick={()=>{handleInput(1)}}>1</div>
                            <div onClick={()=>{handleInput(2)}}>2</div>
                            <div onClick={()=>{handleInput(3)}}>3</div>
                        </div>
                        <div className="numbers">
                            <div onClick={()=>{handleInput(0)}}>0</div>
                            <div onClick={()=>{handleInput('.')}}>.</div>
                            <div id="clear">C</div>
                        </div>
                    </div>
                    <div className="equal" id="result" onClick={()=>{handleInput('=')}}>=</div>
                </div>
            </div>
        </div>
    );
}