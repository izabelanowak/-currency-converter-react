import styled, { css } from "styled-components";

export const Container = styled.div`
    overflow-x: auto;
    max-width: 600px;
    margin: 0 auto;
`;

export const Paragraph = styled.p`
    margin: 10px auto;
    padding: 10px 5px;
    background-color: #fff;
    width: 100%;
    max-width: 600px;
    font-size: 18px;
    text-align: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;