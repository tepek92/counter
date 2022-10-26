import React from 'react';
import s from './Result.module.css'

type ResultPropsType = {
    MAX_COUNT: number
    count: number
}

export function Result(props: ResultPropsType) {
    const {count, MAX_COUNT} = props;
    const styleText = count === MAX_COUNT ? `${s.text} ${s.red}` : s.text;

    const textDisplay = <span className={styleText}>{count}</span>;

    return (
        <div className={s.result}>
            {textDisplay}
        </div>
    );
};

