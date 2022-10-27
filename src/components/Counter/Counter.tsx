import React, {useEffect, useState} from 'react';
import {Result} from './Result/Result';
import {Controler} from './Controler/Controler';
import s from './Counter.module.css';
import {Settings} from "./Settings/Settings";
import {ToggleColorMode} from "./ToggleColorMode/ToggleColorMode";

export function Counter() {
    const [START_COUNT, setStartCount] = useState<number>(JSON.parse(localStorage.getItem("START_COUNT") || "0"));
    const [MAX_COUNT, setMaxCount] = useState<number>(JSON.parse(localStorage.getItem("MAX_COUNT") || "5"));
    const [STEP_COUNT, setStepCount] = useState<number>(JSON.parse(localStorage.getItem("STEP_COUNT") || "1"));
    const [count, setCount] = useState<number>(JSON.parse(localStorage.getItem("count") || "0"));
    const [display, setDisplay] = useState<boolean>(JSON.parse(localStorage.getItem("display") || "true"));


    useEffect(() => {
        localStorage.setItem("START_COUNT", JSON.stringify(START_COUNT));
        localStorage.setItem("MAX_COUNT", JSON.stringify(MAX_COUNT));
        localStorage.setItem("STEP_COUNT", JSON.stringify(STEP_COUNT));
        localStorage.setItem("count", JSON.stringify(count));
        localStorage.setItem("display", JSON.stringify(display));
    }, [START_COUNT, MAX_COUNT,STEP_COUNT, count, display])


    const addNewSettings = (newStartValue: number, newMaxValue: number, newStepValue: number) => {
        setCount(newStartValue);
        setStartCount(newStartValue);
        setMaxCount(newMaxValue);
        setStepCount(newStepValue);
        changeDisplay()
    }

    const changeCount = () => {
        if (count + STEP_COUNT > MAX_COUNT) {
            setCount(MAX_COUNT);
        } else if (count < MAX_COUNT) {
            setCount(count + STEP_COUNT)
        }
    }
    const resetCount = () => setCount(START_COUNT);

    const changeDisplay = () => setDisplay(!display);

    return (
        <div className={s.body}>
            {!display &&
                <div className={s.display}>
                    <Controler
                        START_COUNT={START_COUNT}
                        count={count}
                        resetCount={resetCount}
                        changeDisplay={changeDisplay}
                    />
                    <Result MAX_COUNT={MAX_COUNT} count={count} changeCount={changeCount}/>
                    <ToggleColorMode />
                </div>}
            {display &&
                <div className={s.display}>
                    <Settings
                        START_COUNT={START_COUNT}
                        MAX_COUNT={MAX_COUNT}
                        STEP_COUNT={STEP_COUNT}
                        addNewSettings={addNewSettings}
                        changeDisplay={changeDisplay}
                    />
                </div>}
        </div>


    );
}

