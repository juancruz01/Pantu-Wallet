import {MyRoutes, Light, Dark, AuthContextProvider} from "./index";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { ThemeContext } from "./context/ThemeContext";


function App() {
    const [theme, setTheme] = useState('dark');
    const themeStyle = theme ==='light' ? Light : Dark;

    return (
        <>
            <ThemeContext.Provider value={{setTheme, theme}}>
                <ThemeProvider theme={themeStyle}>
                    <AuthContextProvider>
                        <MyRoutes/>
                        <ReactQueryDevtools initialIsOpen={true} />
                    </AuthContextProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
        )
}

export default App;
