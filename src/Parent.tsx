import {AppChild} from "./Child";
import ReactDOM from "react-dom/client";
import React from "react";
import Number from "./Number";

export const Parent = () => {
    // const [name, setName] = React.useState("John")
    const name = "John";
    const secondname = "kowalski";
    // const isVisible = true;

    return(<>
        <AppChild name={name} secondname={secondname} isVisible/>
        <Number number={12} isHex={true}/>

    </>);
}


