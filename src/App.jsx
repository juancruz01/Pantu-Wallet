import {MyRoutes, Light, Dark, AuthContextProvider, Sidebar, Device, Menuburger} from "./index";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { ThemeContext } from "./context/ThemeContext";
import {styled} from "styled-components"


function App() {
    const [theme, setTheme] = useState('light');
    const themeStyle = theme ==='light' ? Light : Dark;
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            <ThemeContext.Provider value={{setTheme, theme}}>
                <ThemeProvider theme={themeStyle}>
                    <AuthContextProvider>

                        <Container>
                            <div className="ContentSidebar">
                                <Sidebar state={sideBarOpen} setState={setSideBarOpen} />
                            </div>
                            <div className="ContentMenuburger">
                                <Menuburger/>
                            </div>
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
    background: ${(props) => props.theme.bgtotal};
    .ContentSidebar{
        display: none;
    }
    .ContentMenuburger{
        display: block;
        position: absolute;
        left: 20px;
    }
    @media  ${Device.tablet}{
        grid-template-columns: 65px 1fr;
        .ContentSidebar{
            display: initial;
        }
        .ContentMenuburger{
            display: none;
        }
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
