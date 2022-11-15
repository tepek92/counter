import React from 'react';
import {Result} from './Result/Result';
import {Controler} from './Controler/Controler';
import s from './Counter.module.css';
import {Settings} from "./Settings/Settings";
import {ToggleColorMode} from "./ToggleColorMode/ToggleColorMode";
import {useDispatch, useSelector} from "react-redux";
import {RootAppState, useAppSelector} from "../../state/store";
import {
    addSettingsValuesAC,
    changeCountAC,
    changeDisplayAC,
    CounterState,
    resetCountAC
} from "../../state/counterReducer";

export function Counter() {
    const dispatch = useDispatch();
    const {startCount, maxCount, stepCount, count, display} =
        useAppSelector<CounterState>(state => state.counterState);

    const addNewSettings = (newStartValue: number, newMaxValue: number, newStepValue: number) => {
        dispatch(addSettingsValuesAC(newStartValue, newMaxValue, newStepValue));
    }

    const changeCount = () => {
        if (count + stepCount > maxCount) {
            dispatch(changeCountAC(maxCount));
        } else {
            dispatch(changeCountAC(count + stepCount));
        }
    };

    const resetCount = () => dispatch(resetCountAC());
    const changeDisplay = () => dispatch(changeDisplayAC());

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

