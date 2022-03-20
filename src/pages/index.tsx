import Layout from "../components/Layout";

import BackspaceIcon from '@mui/icons-material/Backspace';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const index = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { setTheme, resolvedTheme } = useTheme();

    const [typingEquation, setTypingEquation] = useState('');
    const [equationAnswer, setEquationAnswer] = useState('');
    const signs = ['/','*','+','-','.'];

    const typing = value => {

        if((signs.includes(value) && typingEquation === '') || (signs.includes(value) && signs.includes(typingEquation.slice(-1)))) return;

        if((typingEquation === '' && value === '0') || (typingEquation === '' && value === '00')) return;

        console.log(typingEquation);

        setTypingEquation(typingEquation + value);

    }
    const clearScreen = () => {
        setTypingEquation('');
        setEquationAnswer('');
    }
    const calculate = () => {
        if (typingEquation === '' || signs.includes(typingEquation.slice(-1))) {
            return;
        }

        setEquationAnswer(eval(typingEquation));
    }
    const backspace = () => {
        if(typingEquation === '') return;

        setTypingEquation(typingEquation.slice(0, -1));
    }

    useEffect(() => { setMounted(true) }, []);

    if(!mounted) return null;

    return (
        <Layout>
            <div className="container">
                <main>
                    <div className="calculator">
                        <div className="calculator__screen">
                            <div className="equation">{ typingEquation ? typingEquation : '0' }</div>
                            <div className="answer">{ equationAnswer ? equationAnswer : '0' }</div>
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
                            <div onClick={clearScreen}>C</div>
                            <div onClick={() => typing('7')}>7</div>
                            <div onClick={() => typing('8')}>8</div>
                            <div onClick={() => typing('9')}>9</div>
                            <div className="btn_sign" onClick={() => typing('/')}>&divide;</div>
                            <div onClick={backspace}><BackspaceIcon/></div>
                            <div onClick={() => typing('4')}>4</div>
                            <div onClick={() => typing('5')}>5</div>
                            <div onClick={() => typing('6')}>6</div>
                            <div className="btn_sign" onClick={() => typing('*')}>&times;</div>
                            <div onClick={() => typing('00')}>00</div>
                            <div onClick={() => typing('1')}>1</div>
                            <div onClick={() => typing('2')}>2</div>
                            <div onClick={() => typing('3')}>3</div>
                            <div className="btn_sign" onClick={() => typing('-')}>&minus;</div>
                            <div onClick={() => typing('0')}>0</div>
                            <div onClick={() => typing('.')}>.</div>
                            <div className="btn_equals btn_sign" onClick={calculate}>&#61;</div>
                            <div className="btn_sign" onClick={() => typing('+')}>&#x2B;</div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default index