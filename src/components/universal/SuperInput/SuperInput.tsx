import s from "./SuperInput.module.css";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import {TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {ChangeEvent} from "react";

type SuperInputProps = {
    title: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setValue: (newValue: number) => void;
    value: number
    error: boolean
}

export function SuperInput(props: SuperInputProps) {

    const {title, onChange, setValue, value, error} = props;

    // изменение значения кнопками
    const addValue = (): void => setValue(value + 1);
    const minusValue = (): void => setValue(value - 1);

    return (
        <>
            <div className={s.text}>{title}</div>
            <div>
                <IconButton onClick={minusValue}><RemoveIcon/></IconButton>
                <TextField
                    type="number"
                    size="small"
                    onChange={onChange}
                    value={value}
                    className={s.input}
                    error={error}
                    helperText={error && "Incorrect value"}
                />
                <IconButton onClick={addValue}><AddIcon/></IconButton>
            </div>
        </>

    )
}

