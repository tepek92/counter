import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css';
import {Button} from "../../Button/Button";

type SettingsPropsType = {
    START_COUNT: number
    MAX_COUNT: number
    changeStartCount: (newStartValue: number) => void
    changeMaxCount: (newMaxValue: number) => void
    addNewSettings: () => void
}

export const Settings = (props: SettingsPropsType) => {
    const {START_COUNT, MAX_COUNT, changeStartCount, changeMaxCount, addNewSettings} = props;

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStartCount(JSON.parse(e.currentTarget.value));
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxCount(JSON.parse(e.currentTarget.value));
    }

    const disabled = START_COUNT === MAX_COUNT || START_COUNT < 0 || MAX_COUNT < 0;

    const inputStartStyle =
        START_COUNT === MAX_COUNT || START_COUNT < 0 || START_COUNT > MAX_COUNT
            ? s.input + ' ' + s.error
            : s.input;

    const inputMaxStyle =
        START_COUNT === MAX_COUNT || MAX_COUNT < 0 || START_COUNT > MAX_COUNT
            ? s.input + ' ' + s.error
            : s.input;

    return (
        <div className={s.settings}>
            <div className={s.textBox}>
                <div className={s.text}>START</div>
                <div className={s.text}>MAX</div>
            </div>
            <div className={s.startmax}>
                    <input onChange={onChangeStartHandler} value={START_COUNT} type={"number"} className={inputStartStyle}/>
                    <input onChange={onChangeMaxHandler} value={MAX_COUNT} type={"number"} className={inputMaxStyle}/>
            </div>
            <div className={s.btn}>
                <Button disabled={disabled} onClickHandler={addNewSettings}>SET</Button>
            </div>

        </div>
    )
}