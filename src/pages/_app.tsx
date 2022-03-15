import "../styles/index.scss";
import { ThemeProvider } from 'next-themes';

function App({Component, ...pageProps}) : JSX.Element {
    return (
        <ThemeProvider defaultTheme='dark'>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default App