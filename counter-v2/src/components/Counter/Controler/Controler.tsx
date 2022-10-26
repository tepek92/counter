import React from 'react';
import s from './Controler.module.css'
import {Button} from "../../Button/Button";

type ControlPropsType = {
    START_COUNT: number
    MAX_COUNT: number
    count: number
    changeCount: () => void
    resetCount: () => void
    changeDisplay: () => void
}

export function Controler(props: ControlPropsType) {
    const {START_COUNT, MAX_COUNT, count, changeCount, resetCount, changeDisplay} = props;
    const disabledInc = count === MAX_COUNT;
    const disabledReset = count === START_COUNT;


    return (
        <div className={s.control}>
            <Button disabled={disabledInc} onClickHandler={changeCount}>INC</Button>
            <Button disabled={disabledReset} onClickHandler={resetCount}>RESET</Button>
            <Button disabled={false} onClickHandler={changeDisplay}>SET</Button>
        </div>
    );
}

