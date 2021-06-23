import styled from "styled-components";

export const Wrapper = styled.form`
    margin: 20px auto;
    width: 100%;
    max-width: 600px;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    background-color: #fff;
    border: 1px solid #aaa;
`;

export const Legend = styled.legend`
    font-size: 22px;
    color: #fff;
    background-color: #0e6746;
    padding: 15px;
    border-radius: 10px;
`;

export const Input = styled.input`
    background-color: lightgray;
    padding: 10px;
    width: 100%;
    max-width: 300px;
`;

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