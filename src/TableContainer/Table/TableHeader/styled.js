import styled from "styled-components";
import { Cell } from "../TableData/styled";


export const HeaderCell = styled(Cell)`
    color: #eee;
    background-color: #0e6746;
    font-style: normal;
    font-weight: normal;

    &:hover {
        background-color: hsl(158, 76%, 30%);
    }
`;