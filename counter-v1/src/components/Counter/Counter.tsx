import React, {useEffect, useState} from 'react';
import {Result} from './Result/Result';
import {Controler} from './Controler/Controler';
import s from './Counter.module.css';
import {Settings} from "./Settings/Settings";

export type StatusType = "counter" | "settings";

export function Counter() {

    const STEP_COUNT = 1;
    const [START_COUNT, setStartCount] = useState<number>(JSON.parse(localStorage.getItem("START_COUNT") || "0"));
    const [MAX_COUNT, setMaxCount] = useState<number>(JSON.parse(localStorage.getItem("MAX_COUNT") || "5"));
    const [count, setCount] = useState<number>(JSON.parse(localStorage.getItem("count") || "0"));
    const [status, setStatus] = useState<StatusType>
    (localStorage.getItem("status") === "counter" ? "counter" : "settings");

    useEffect(() => {
        localStorage.setItem("START_COUNT", JSON.stringify(START_COUNT));
        localStorage.setItem("MAX_COUNT", JSON.stringify(MAX_COUNT));
        localStorage.setItem("count", JSON.stringify(count));
        localStorage.setItem("status", status);
    }, [START_COUNT, MAX_COUNT, count, status])

    const changeStartCount = (newStartValue: number) => {
        setStartCount(newStartValue);
        setStatus("settings");
    };
    const changeMaxCount = (newMaxValue: number) => {
        setMaxCount(newMaxValue);
        setStatus("settings");
    };
    const addNewSettings = () => {
        setCount(START_COUNT);
        setStatus("counter");
    }

    const changeCount = () => count >= START_COUNT && count < MAX_COUNT && setCount(count + STEP_COUNT);
    const resetCount = () => setCount(START_COUNT);

    return (
        <div className={s.counter}>
            <Result
                START_COUNT={START_COUNT}
                MAX_COUNT={MAX_COUNT}
                count={count}
                status={status}/>
            <Controler
                START_COUNT={START_COUNT}
                MAX_COUNT={MAX_COUNT}
                count={count}
                changeCount={changeCount}
                resetCount={resetCount}
                status={status}
            />
            <Settings
                START_COUNT={START_COUNT}
                MAX_COUNT={MAX_COUNT}
                changeStartCount={changeStartCount}
                changeMaxCount={changeMaxCount}
                addNewSettings={addNewSettings}
                status={status}
            />
        </div>
    );
}

