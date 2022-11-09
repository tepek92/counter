import React, {useEffect, useState} from 'react';
import {Result} from './Result/Result';
import {Controler} from './Controler/Controler';
import s from './Counter.module.css';
import {Settings} from "./Settings/Settings";
import {ToggleColorMode} from "./ToggleColorMode/ToggleColorMode";

export function Counter() {
    // получаем "последние" данные из local storage
    const [startCount, setStartCount] = useState<number>(JSON.parse(localStorage.getItem("startCount") || "0"));
    const [maxCount, setMaxCount] = useState<number>(JSON.parse(localStorage.getItem("maxCount") || "5"));
    const [stepCount, setStepCount] = useState<number>(JSON.parse(localStorage.getItem("stepCount") || "1"));
    const [count, setCount] = useState<number>(JSON.parse(localStorage.getItem("count") || "0"));
    const [display, setDisplay] = useState<boolean>(JSON.parse(localStorage.getItem("display") || "true"));

    // лучше один useEffect или несколько
    // ?
    // тут поулчается, что при любом изменении все данные воторно пересохраняет
    useEffect(() => {
        localStorage.setItem("startCount", JSON.stringify(startCount));
        localStorage.setItem("maxCount", JSON.stringify(maxCount));
        localStorage.setItem("stepCount", JSON.stringify(stepCount));
        localStorage.setItem("count", JSON.stringify(count));
        localStorage.setItem("display", JSON.stringify(display));
    }, [startCount, maxCount,stepCount, count, display])


    const addNewSettings = (newStartValue: number, newMaxValue: number, newStepValue: number) => {
        setCount(newStartValue);
        setStartCount(newStartValue);
        setMaxCount(newMaxValue);
        setStepCount(newStepValue);
        changeDisplay()
    }

    const changeCount = () => {
        if (count + stepCount > maxCount) {
            setCount(maxCount);
        } else {
            setCount(count + stepCount)
        }
    };

    const resetCount = () => setCount(startCount);

    const changeDisplay = () => setDisplay(!display);

    return (
        <div className={s.body}>
            {display &&
                <div className={s.display}>
                    <Controler
                        startCount={startCount}
                        count={count}
                        resetCount={resetCount}
                        changeDisplay={changeDisplay}
                    />
                    <Result maxCount={maxCount} count={count} changeCount={changeCount}/>
                    <ToggleColorMode />
                </div>}
            {!display &&
                <div className={s.display}>
                    <Settings
                        startCount={startCount}
                        maxCount={maxCount}
                        stepCount={stepCount}
                        addNewSettings={addNewSettings}
                        changeDisplay={changeDisplay}
                    />
                </div>}
        </div>
    );
}

