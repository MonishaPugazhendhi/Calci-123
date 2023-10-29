import React, { useEffect, useRef, useState } from "react";

import './calci.css'
import Numbers from "./numbers";

export default function Calculator() {

    const [current, setCurrent] = useState([]);
    const [previous, setprevious] = useState([]);
    const currentParamRef = useRef(current);
    const previousParamRef = useRef(previous);
    const [operand, setOperand] = useState('');
    const operandParamRef = useRef(operand);
    const [eqauls, setEquals] = useState(false);
    const equalParamRef = useRef(eqauls);
    let t;
    useEffect(() => {
        currentParamRef.current = current;
    }, [current]);
    useEffect(() => {
        previousParamRef.current = previous;
    }, [previous]);
    useEffect(() => {
        operandParamRef.current = operand;
    }, [operand]);
    useEffect(() => {
        equalParamRef.current = eqauls;
    }, [eqauls]);
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (!isNaN(+e.key) || e.key === '.') { (currentParamRef?.current?.includes('.') && e.key === '.') ? addDigits('') : addDigits(e.key) }
            else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') clickOperand(e.key)
            else if (e.key === 'Backspace' || e.key === "Delete") deletenum()
            else if (e.key === "Enter") evaluate()
            else if (e.key === "Escape") clearAll()
            console.log(e.key, "keyyys")
        }
        )
    }, [])
    const addDigits = (value) => {
        if(currentParamRef.current.toString().split('').length < 70){

            setCurrent((prev) => {
                if (equalParamRef.current) {
                    // clearAll()
                    t = [value]
                    console.log(t, 'clear')
                } else {
                    // console.log(current,'cuurr')
                    t = [...prev, value]
                    console.log(t, 'notclear')
                }
                console.log(t, 'total')
                const y = t.join().replace(/,/g, "")
    
                console.log(y, "current")
                setEquals(false)
                return y
            })
        }

    }
    const clickOperand = (value) => {


        setCurrent((current) => {
            console.log(previous, "previous")
            setprevious((previous) => {

                if (current.length === 0 && value === '-') {
                    setCurrent([value.concat(current)])
                } else if (current?.length !== 0 && previous?.length !== 0) {
                    evaluate()
                    setEquals(false)
                    setprevious(result)
                    setCurrent([])

                    setOperand(value)
                }
                else {
                    setOperand(value);
                    setprevious(current);
                    setCurrent([])
                    setEquals(false)
                }
                return previous
            })
            return current
        })
    }



    let result = ''

    const evaluate = () => {
        setEquals(true)
        console.log(equalParamRef.current, 'equalParamRef')
        let compute = ''
        const prev = parseFloat(previousParamRef.current);
        const curr = parseFloat(currentParamRef.current);

        if (operandParamRef.current === "+") {
            compute = prev + curr
        }
        else if (operandParamRef.current === "-") {
            compute = prev - curr
        }
        if (operandParamRef.current === "*") {
            compute = prev * curr
        }
        if (operandParamRef.current === "/") {
            compute = prev / curr
        }
        result = compute.toString()
        console.log(previousParamRef, currentParamRef, result, 'ygyu')

        console.log(current, previous, result, 'ygyu2')

        setCurrent(result)



        console.log(current, previous, result, 'ygyu3')
        setprevious([])
        setOperand('');


    }
    const clearAll = () => {
        console.log('clearAll')
        setCurrent([])
        setprevious([])
        setOperand('')
        setEquals(false)
    }
    const deletenum = () => {
        console.log(current, "del")
        // if(typeof(current)!=='string'){
        //     current.tostring()
        // }
        setCurrent((prev) => {
            if (typeof (prev) === 'string') {
                const t = prev?.split('')
                t.pop()
                const u = t.join().replace(/,/g, "")
                console.log(u, "ghvhg")
                return u
            }
        })
    }
    console.log(previous, "currentOo")
    return (
        <div style={{zIndex:99999999, position:'relative'}} className="body">
            <Numbers/>
            <h1>Calculator</h1>
            <div className='container'>
                <div className='output'>
                    <div  
                    style={{fontSize:
                     previous.toString().split('').length >= 30 ? '0.8rem'
                     : previous.toString().split('').length >= 20 ? '0.9rem'
                         : previous.toString().split('').length >= 15 ? '1.0rem'
                             : '1.5rem'}}
                              className='prev-operand'>{previous}<div className="operation">{operand}</div></div>
                    <div 
                    style={{
                        fontSize: current.toString().split('').length >= 30 ? '0.9rem'
                            : current.toString().split('').length >= 20 ? '1.3rem'
                                : current.toString().split('').length >= 15 ? '1.8rem'
                                    : '2rem'
                    }}
                        className='current-operant'>{current}</div>
                </div>

                <button onClick={clearAll} className='span2 '>AC</button>
                <button onClick={deletenum} className='gridbutton '>DEL</button>
                <button onClick={(e) => clickOperand(current.length === 0 ? '' : e.target.value)} value={'/'} className='gridbutton colored'>÷</button>
                <button onClick={(e) => addDigits(e.target.value)} value={1} className='gridbutton'>1</button>
                <button onClick={(e) => addDigits(e.target.value)} value={2} className='gridbutton'>2</button>
                <button onClick={(e) => addDigits(e.target.value)} value={3} className='gridbutton'>3</button>
                <button onClick={(e) => clickOperand(current.length === 0 ? '' : e.target.value)} value={'*'} className='gridbutton colored'>*</button>
                <button onClick={(e) => addDigits(e.target.value)} value={4} className='gridbutton'>4</button>
                <button onClick={(e) => addDigits(e.target.value)} value={5} className='gridbutton'>5</button>
                <button onClick={(e) => addDigits(e.target.value)} value={6} className='gridbutton'>6</button>
                <button onClick={(e) => clickOperand(current.length === 0 ? '' : e.target.value)} value={'+'} className='gridbutton colored'>+</button>
                <button onClick={(e) => addDigits(e.target.value)} value={7} className='gridbutton'>7</button>
                <button onClick={(e) => addDigits(e.target.value)} value={8} className='gridbutton'>8</button>
                <button onClick={(e) => addDigits(e.target.value)} value={9} className='gridbutton'>9</button>
                <button onClick={(e) => clickOperand(current.length === 0 && current.includes('-') ? '' : e.target.value)} value={'-'} className='gridbutton colored'>-</button>
                <button onClick={(e) => addDigits(currentParamRef.current.includes('.') ? '' : e.target.value)} value={'.'} className='gridbutton'>.</button>
                <button onClick={(e) => addDigits(e.target.value)} value={0} className='gridbutton'>0</button>
                <button onClick={evaluate} className='span2 colored'>=</button>

            </div>
        </div>
    )
}