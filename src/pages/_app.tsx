import "../styles/index.scss";

function App({Component, ...pageProps}) : JSX.Element {
    return <Component {...pageProps}/>
}

export default App