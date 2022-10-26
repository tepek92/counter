import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    disabled: boolean
    onClickHandler: () => void
    children: React.ReactNode
}

export function Button(props: ButtonPropsType) {
    const {disabled, onClickHandler, children} = props;
    const style = disabled ? s.disabled + ' ' + s.btn : s.btn;

    return (
        <button className={style} disabled={disabled} onClick={onClickHandler}>{children}</button>
    );
};

