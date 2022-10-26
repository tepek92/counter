import React from 'react';
import s from './Result.module.css'
import {StatusType} from "../Counter";

type ResultPropsType = {
    MAX_COUNT: number
    START_COUNT: number
    count: number
    status: StatusType
}

export function Result(props: ResultPropsType) {
    const {count, START_COUNT, MAX_COUNT, status} = props;
    const styleText = count === MAX_COUNT ? `${s.text} ${s.red}` : s.text;

    const error = START_COUNT === MAX_COUNT || START_COUNT < 0 || MAX_COUNT < 0 || START_COUNT > MAX_COUNT;
    const textDisplay =
        error ? <span className={s.error}>INCORRECT VALUE</span> :
            status === 'settings' ? <span className={s.settings}>PRESS SET</span> :
                <span className={styleText}>{count}</span>;

    return (
        <div className={s.result}>
            {textDisplay}
        </div>
    );
};

