import Layout from "../components/Layout";

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
                            <div className="buttonGroup__1 buttonGroup">
                                <button>Light</button>
                                <button>Dark</button>
                            </div>
                            <div className="buttonGroup__2 buttonGroup">
                                <button>History</button>
                                <button>Light</button>
                                <button>Light</button>
                                <button>Light</button>
                            </div>
                            <div className="buttonGroup__3 buttonGroup">
                                <button>Light</button>
                                <button>Light</button>
                            </div>
                            <div className="buttonGroup__4 buttonGroup">
                                <button>Light</button>
                                <button>Light</button>
                            </div>
                            <div className="buttonGroup__5 buttonGroup">
                                <button>Light</button>
                                <button>Light</button>
                            </div>
                            <div className="buttonGroup__6 buttonGroup">
                                <button>Light</button>
                                <button>Light</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default index