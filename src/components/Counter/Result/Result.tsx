import React from 'react';
import s from './Result.module.css'

type ResultPropsType = {
    MAX_COUNT: number
    count: number
    changeCount: () => void
}

export function Result(props: ResultPropsType) {
    const {count, MAX_COUNT, changeCount} = props;
    const styleText = count === MAX_COUNT ? `${s.text} ${s.red}` : s.text;


    return (
        <div className={s.result} onClick={changeCount}>
            <div className={styleText}>{count}</div>
        </div>
    );
};

