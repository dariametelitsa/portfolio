import { mainTheme } from "./Theme";
import { FontProps } from "../../assets/Types";


export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontProps) => `
    font-family: ${family || '"Fira Code", monospace'};
    font-weight: ${weight || 400};
    color: ${color || mainTheme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px) / (1366 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

export const visuallyHidden = () => `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`