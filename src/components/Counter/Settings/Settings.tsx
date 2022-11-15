import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from "@mui/material/IconButton";
import {SuperInput} from "./SuperInput/SuperInput";


type SettingsPropsType = {
    startCount: number
    maxCount: number
    stepCount: number
    addNewSettings: (newStartValue: number, newMaxValue: number, newStepValue: number) => void
    changeDisplay: () => void
}

export const Settings = (props: SettingsPropsType) => {
    const {startCount, maxCount, stepCount, addNewSettings, changeDisplay} = props;
    // нужен ли тут useEffect или достаточно, что значения из пропсов сетаются при новой отрисовке
    const [start, setStar] = useState<number>(startCount);
    const [max, setMax] = useState<number>(maxCount);
    const [step, setStep] = useState<number>(stepCount);

    // считывает значения при изменении импута
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStar(+e.currentTarget.value);
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value);
    }
    const onChangeStepHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStep(+e.currentTarget.value);
    }

    // устанавливаем значения из локального стейта в стей в каунтере
    const saveSetting = () => {
        addNewSettings(start, max, step);
    }

    const error = start === max || start > max;
    const errorStart = error || start < 0;
    const errorMax = error || max < 0;
    const errorStep = step <= 0;

    const disabled = errorStart || errorMax || errorStep;
    const colorResetButton = disabled ? "inherit" : "primary";


    return (
        <>
            <div className={s.control}>
                <IconButton
                    onClick={changeDisplay}
                    color={colorResetButton}
                >
                    <ArrowBackIosIcon/>
                </IconButton>
                <div><b>Settings</b></div>
                <IconButton
                    onClick={saveSetting}
                    disabled={disabled}
                    color={colorResetButton}
                >
                    <DoneIcon/>
                </IconButton>
            </div>
            <div className={s.settings}>
                <SuperInput
                    title="START VALUE"
                    onChange={onChangeStartHandler}
                    setValue={setStar}
                    value={start}
                    error={errorStart}
                />
                <SuperInput
                    title="MAX VALUE"
                    onChange={onChangeMaxHandler}
                    setValue={setMax}
                    value={max}
                    error={errorMax}
                />
                <SuperInput
                    title="STEP"
                    onChange={onChangeStepHandler}
                    setValue={setStep}
                    value={step}
                    error={errorStep}
                />
            </div>
        </>
    )
}