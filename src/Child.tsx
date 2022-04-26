import {Parent} from "./Parent";

export interface AppChildProps {
    name: string;
    secondname: string;
    isVisible: boolean

}

export const AppChild = ({name, secondname, isVisible}: AppChildProps) => {
    return (<span className={isVisible ? "yes" : "no"}>
        My name is {name}, {secondname};
    </span>);
}
