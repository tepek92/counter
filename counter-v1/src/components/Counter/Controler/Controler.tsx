import React from 'react';
import s from './Controler.module.css'
import {Button} from "../../Button/Button";
import {StatusType} from "../Counter";

type ControlPropsType = {
    START_COUNT: number
    MAX_COUNT: number
    count: number
    changeCount: () => void
    resetCount: () => void
    status: StatusType
}

export function Controler(props: ControlPropsType) {

    const {START_COUNT, MAX_COUNT, count, changeCount, resetCount, status} = props;

    const disabledInc = count === MAX_COUNT || status !== 'counter';
    const disabledReset = count === START_COUNT || status !== 'counter';

    return (
        <div className={s.control}>
            <Button disabled={disabledInc} onClickHandler={changeCount}>INC</Button>
            <Button disabled={disabledReset} onClickHandler={resetCount}>RESET</Button>
        </div>
    );
}

