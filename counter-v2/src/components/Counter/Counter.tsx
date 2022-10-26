import React, {useEffect, useState} from 'react';
import {Result} from './Result/Result';
import {Controler} from './Controler/Controler';
import s from './Counter.module.css';
import {Settings} from "./Settings/Settings";
import {findAllByDisplayValue} from "@testing-library/react";

export function Counter() {
    const STEP_COUNT = 1;
    const [START_COUNT, setStartCount] = useState<number>(JSON.parse(localStorage.getItem("START_COUNT") || "0"));
    const [MAX_COUNT, setMaxCount] = useState<number>(JSON.parse(localStorage.getItem("MAX_COUNT") || "5"));
    const [count, setCount] = useState<number>(JSON.parse(localStorage.getItem("count") || "0"));
    const [display, setDisplay] = useState<boolean>(JSON.parse(localStorage.getItem("display") || "true"));


    useEffect(() => {
        localStorage.setItem("START_COUNT", JSON.stringify(START_COUNT));
        localStorage.setItem("MAX_COUNT", JSON.stringify(MAX_COUNT));
        localStorage.setItem("count", JSON.stringify(count));
        localStorage.setItem("display", JSON.stringify(display));
    }, [START_COUNT, MAX_COUNT, count, display])

    const changeStartCount = (newStartValue: number) => setStartCount(newStartValue);
    const changeMaxCount = (newMaxValue: number) => setMaxCount(newMaxValue);
    const addNewSettings = () => {
        setCount(START_COUNT);
        changeDisplay()
    }

    const changeCount = () => count >= START_COUNT && count < MAX_COUNT && setCount(count + STEP_COUNT);
    const resetCount = () => setCount(START_COUNT);

    const changeDisplay = () => setDisplay(!display);

    return (
        <div>
            {!display && <div className={s.counter}>
                <Result MAX_COUNT={MAX_COUNT} count={count}/>
                <Controler
                    START_COUNT={START_COUNT}
                    MAX_COUNT={MAX_COUNT}
                    count={count}
                    changeCount={changeCount}
                    resetCount={resetCount}
                    changeDisplay={changeDisplay}
                />
            </div>}
            {display && <div>
                <Settings
                    START_COUNT={START_COUNT}
                    MAX_COUNT={MAX_COUNT}
                    changeStartCount={changeStartCount}
                    changeMaxCount={changeMaxCount}
                    addNewSettings={addNewSettings}
                />
            </div>}
        </div>


    );
}

