import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    font-size: 22px;
    color: #fff;
    background-color: #0e6746;
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;

    &:focus {
        outline: none;
        border-color: black;
    }

    &:hover {
        background-color: hsl(158, 76%, 30%);
    }

    &:active {
        background-color: hsl(158, 76%, 40%);
        outline: none;
    }
`;