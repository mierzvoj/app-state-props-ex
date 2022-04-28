import React, {useCallback, useState} from "react";

export interface NumberProps {
    number: number;
    isHex: boolean
}

const Number = ({number, isHex}: NumberProps) => {
    const [hex, setHex] = React.useState(isHex);

    console.log(hex);
    console.log(setHex);

    const toggle = () => {
        setHex(!hex)
    };


    return (
        <div>
            My number is  <b>{hex ? number.toString(16) : number }</b>;

            <button onClick={toggle}>toggle from number</button>
            From number: Boolean is set to <b>{String(isHex)}</b>

        </div>
    )
}
export default Number;
