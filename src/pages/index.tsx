import Layout from "../components/Layout";

import UndoIcon from '@mui/icons-material/Undo';
import HistoryIcon from '@mui/icons-material/History';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const index = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { setTheme, resolvedTheme } = useTheme();
    const [equation, setEquation] = useState<any>('');
    const [result, setResult] = useState<any>('')
    const operator:Array<string> = ['/', '*', '+', '-', '.'];
    
    const update = value => {

        if (operator.includes(value) && equation === '' || operator.includes(value) && operator.includes(equation.slice(-1))) {
            return;
        }

        setEquation(equation + value);

        if (!operator.includes(value)) {
            setResult(eval(equation + value).toString());
        }
    }

    const calculate = () => {
        //Error when clicking equals if the last digit is an operator
        const value = equation;
        console.log(value);
        if (
            operator.includes(value) && equation === '' || 
            operator.includes(value) && operator.includes(equation.slice(-1))) {
            return;
        }
        if (!operator.includes(value)) {
            setResult(eval(equation));
    
            setEquation('');
        }
    }

    const backspc = () => {
        if (equation == '') {
            return
        }
        const value = equation.slice(0, -1);
        setEquation(value);
        
    }

    useEffect(() => { setMounted(true) }, []);

    if(!mounted) return null;

    return (
        <Layout>
            <div className="container">
                <main>
                    <div className="calculator">
                        <div className="calculator__screen">
                            <div className="equation">{ equation || "0" }</div>
                            <div className="answer">{ result ? result : "0" }</div>
                        </div>
                        <div className="calculator__keypad">
                            <div className="toggle">
                                <input type={'checkbox'} name={'switch'} id={'switch'} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} defaultChecked={resolvedTheme === "dark" ? false : true}/>
                                <label htmlFor={'switch'}>
                                    <div className="switch__text">
                                        <span>
                                            Light Mode
                                        </span>
                                        <span>
                                            Dark Mode
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className="btn_history"><HistoryIcon/></div>
                            <div><UndoIcon/></div>
                            <div>C</div>
                            <div className="btn_sign" onClick={() => update('/')}>&divide;</div>
                            <div onClick={backspc}><BackspaceIcon/></div>
                            <div onClick={() => update('7')}>7</div>
                            <div onClick={() => update('8')}>8</div>
                            <div onClick={() => update('9')}>9</div>
                            <div className="btn_sign" onClick={() => update('*')}>&times;</div>
                            <div onClick={() => update('000')}>000</div>
                            <div onClick={() => update('4')}>4</div>
                            <div onClick={() => update('5')}>5</div>
                            <div onClick={() => update('6')}>6</div>
                            <div className="btn_sign" onClick={() => update('-')}>&minus;</div>
                            <div onClick={() => update('00')}>00</div>
                            <div onClick={() => update('1')}>1</div>
                            <div onClick={() => update('2')}>2</div>
                            <div onClick={() => update('3')}>3</div>
                            <div onClick={() => update('0')}>0</div>
                            <div onClick={() => update('.')}>.</div>
                            <div className="btn_equals btn_sign" onClick={calculate}>&#61;</div>
                            <div className="btn_add btn_sign" onClick={() => update('+')}>&#x2B;</div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default index