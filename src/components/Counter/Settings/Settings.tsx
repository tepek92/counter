import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from "@mui/material/IconButton";
import {SuperInput} from "./SuperInput/SuperInput";


type SettingsPropsType = {
    START_COUNT: number
    MAX_COUNT: number
    STEP_COUNT: number
    addNewSettings: (newStartValue: number, newMaxValue: number, newStepValue: number) => void
    changeDisplay: () => void
}

export const Settings = (props: SettingsPropsType) => {
    const {START_COUNT, MAX_COUNT, STEP_COUNT, addNewSettings, changeDisplay} = props;
    // нужен ли тут useEffect или достаточно, что значения из пропсов сетаются при новой отрисовке
    const [start, setStar] = useState<string>(JSON.stringify(START_COUNT));
    const [max, setMax] = useState<string>(JSON.stringify(MAX_COUNT));
    const [step, setStep] = useState<string>(JSON.stringify(STEP_COUNT));

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStar(e.currentTarget.value);
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.value);
    }
    const onChangeStepHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStep(e.currentTarget.value);
    }


    const saveSetting = () => {
        addNewSettings(+start, +max, +step);
    }

    const errorStart = start === max || +start < 0 || +start > +max;
    const errorMax = start === max || +max < 0 || +start > +max;
    const errorStep = +step <= 0;

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
                    title={"START VALUE"}
                    onChange={onChangeStartHandler}
                    setValue={setStar}
                    value={start}
                    error={errorStart}
                />
                <SuperInput
                    title={"MAX VALUE"}
                    onChange={onChangeMaxHandler}
                    setValue={setMax} value={max}
                    error={errorMax}
                />
                <SuperInput
                    title={"STEP"}
                    onChange={onChangeStepHandler}
                    setValue={setStep}
                    value={step}
                    error={errorStep}
                />
            </div>
        </>
    )
}