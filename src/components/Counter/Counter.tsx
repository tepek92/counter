import React from 'react';
import {Result} from './Result/Result';
import {Controler} from './Controler/Controler';
import s from './Counter.module.css';
import {Settings} from "./Settings/Settings";
import {ToggleColorMode} from "../universal/ToggleColorMode/ToggleColorMode";
import {
    CounterState,
    addSettingsValuesAC,
    changeCountAC,
    changeDisplayAC,
    resetCountAC
} from "../../state/counterReducer";
import {useAppDispatch, useAppSelector} from "../../state/hooks";

export function Counter() {
    const dispatch = useAppDispatch();
    const {startCount, maxCount, stepCount, count, display} =
        useAppSelector<CounterState>(state => state.counterState);

    const addNewSettings = (newStartValue: number, newMaxValue: number, newStepValue: number): void => {
        dispatch(addSettingsValuesAC(newStartValue, newMaxValue, newStepValue));
    }

    const changeCount = (): void => {
        if (count + stepCount > maxCount) {
            dispatch(changeCountAC(maxCount));
        } else {
            dispatch(changeCountAC(count + stepCount));
        }
    };

    const resetCount = (): void => {dispatch(resetCountAC())};
    const changeDisplay = (): void => {dispatch(changeDisplayAC())};

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
                    <Result
                        maxCount={maxCount}
                        count={count}
                        changeCount={changeCount}/>
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

