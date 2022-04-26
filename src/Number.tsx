import {useState} from "react";

export interface NumberProps {
    number: number;
    isHex: boolean
}

const Number = ({number, isHex}: NumberProps) => {
    const [value, setValue] = useState(isHex);
    console.log(value);
    console.log(setValue);


    return (
        <span>
            My number is {number} {isHex};
        </span>
    )
}
export default Number;
