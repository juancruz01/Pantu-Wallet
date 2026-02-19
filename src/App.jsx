import {MyRoutes, Light, Dark, AuthContextProvider, Sidebar, Device} from "./index";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { ThemeContext } from "./context/ThemeContext";
import {styled} from "styled-components"


function App() {
    const [theme, setTheme] = useState('dark');
    const themeStyle = theme ==='light' ? Light : Dark;
    //const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            <ThemeContext.Provider value={{setTheme, theme}}>
                <ThemeProvider theme={themeStyle}>
                    <AuthContextProvider>

                        <Container>
                            <Sidebar />
                            <Containerbody>
                                <MyRoutes/>
                            </Containerbody>
                        </Container>

                        <ReactQueryDevtools initialIsOpen={true} />
                    </AuthContextProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
        )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media  ${Device.tablet}{
        grid-template-columns: 65px 1fr;
    }
`;

const Containerbody = styled.div`
    grid-column: 1;
    width: 100%;
    
    @media ${Device.tablet}{
        grid-column: 2;
    }
`;

export default App;
