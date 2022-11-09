import React from 'react';
import s from './Result.module.css'

type ResultPropsType = {
    maxCount: number
    count: number
    changeCount: () => void
}

export function Result(props: ResultPropsType) {
    const {count, maxCount, changeCount} = props;
    const styleText = count === maxCount ? `${s.text} ${s.red}` : s.text;


    return (
        <div className={s.result} onClick={changeCount}>
            <div className={styleText}>{count}</div>
        </div>
    );
};

