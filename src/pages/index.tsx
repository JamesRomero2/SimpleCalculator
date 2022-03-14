import Layout from "../components/Layout";

import UndoIcon from '@mui/icons-material/Undo';
import HistoryIcon from '@mui/icons-material/History';
import BackspaceIcon from '@mui/icons-material/Backspace';

const index = () => {
    return (
        <Layout>
            <div className="container">
                <main>
                    <div className="calculator">
                        <div className="calculator__screen">
                            <div className="equation">000</div>
                            <div className="answer">000</div>
                        </div>
                        <div className="calculator__keypad">
                            <div className="toggle">Light</div>
                            <div className="btn_history"><HistoryIcon/></div>
                            <div><UndoIcon/></div>
                            <div>C</div>
                            <div className="btn_sign">&divide;</div>
                            <div><BackspaceIcon/></div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div className="btn_sign">&times;</div>
                            <div>000</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div className="btn_sign">&minus;</div>
                            <div>00</div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>0</div>
                            <div>.</div>
                            <div className="btn_equals btn_sign">&#61;</div>
                            <div className="btn_add btn_sign">&#x2B;</div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default index