import React, {useEffect, useState, createContext, useMemo} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CssBaseline, Paper} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';


// создаем контекст и присваиваем ему первоначальное значение(функцию переключеиня темы)
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {

    // получаем "последнюю" тему из local storage
    const colorModeLS = localStorage.getItem("colorMode");
    const initMode = colorModeLS ? JSON.parse(colorModeLS) : "light";

    // состояние темы
    const [mode, setMode] = useState<"light" | "dark">(initMode);

    // при изменении темы, "запоминаем" состояние в local storage
    useEffect(() => localStorage.setItem("colorMode", JSON.stringify(mode)), [mode]);

    // создаем объект с функцию изменения темы и мемоизируем его
    // создается всего 1 раз, т.к. нет зависимостей
    const colorMode = useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }), []);

    // подменяем стили в MUI на собственные, устанавливаем тему
    const theme = useMemo(() => createTheme({palette: {mode}}), [mode]);

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
