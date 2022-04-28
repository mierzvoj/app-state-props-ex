import React from "react";
import Number from "./Number";
import {Interface} from "readline";

const BooleanState = () => {
    const[isToggled, setIsToggled] = React.useState(true);
    const toggle = React.useCallback(
        ()=> setIsToggled(!isToggled),
        [isToggled, setIsToggled],
    );
    return(
        <div>
            Boolean is set to <b>{String(isToggled)}</b>
            <button onClick={toggle}>toggle</button>
        </div>
    )
}
export default BooleanState
