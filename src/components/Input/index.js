import React from 'react';
import { InputBase } from "./styles"

export default function Input(props) {

    const { title, value, onChange } = props;

    return (
        <InputBase
        placeholder={title}
        value={value}
        onChange={onChange}
        />
    );

}
