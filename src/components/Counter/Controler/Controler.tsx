import React from 'react';
import s from './Controler.module.css'
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import AutorenewIcon from '@mui/icons-material/Autorenew';

type ControlPropsType = {
    startCount: number
    count: number
    resetCount: () => void
    changeDisplay: () => void
}

export function Controler(props: ControlPropsType) {
    const {startCount, count, resetCount, changeDisplay} = props;
    const disabled = count === startCount;
    const colorResetButton = disabled ? "inherit" : "primary";


    return (
        <div className={s.control}>
            <IconButton disabled={disabled}
                        onClick={resetCount}>
                <AutorenewIcon color={colorResetButton}/>
            </IconButton>
            <div><b>Counter</b></div>
            <IconButton onClick={changeDisplay}><TuneIcon color="primary"/></IconButton>
        </div>
    );
}

