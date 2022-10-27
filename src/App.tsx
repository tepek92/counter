import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CssBaseline, Paper} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {

    const colorModeLS = localStorage.getItem("colorMode");
    const initMode = colorModeLS ? JSON.parse(colorModeLS) : "light";

    const [mode, setMode] = React.useState<"light" | "dark">(initMode);
    useEffect(() => localStorage.setItem("colorMode", JSON.stringify(mode)), [mode]);

    const colorMode = React.useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }), [],);

    const theme = React.useMemo(() => createTheme({palette: {mode}}), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Paper elevation={5}>
                        <Counter/>
                    </Paper>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}

export default App;
