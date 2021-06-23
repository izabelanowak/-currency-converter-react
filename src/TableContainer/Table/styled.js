import styled, { css } from "styled-components";

export const Wrapper = styled.table`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    font-size: 18px;
    border-collapse: collapse;
    background-color: #fff;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Caption = styled.caption`
    font-size: 22px;
    margin-top: 20px;
    padding: 10px 5px;
    background-color: #fff;
`;

export const TableRow = styled.tr`
    &:hover {
        background-color: #ddd;
    }
`;