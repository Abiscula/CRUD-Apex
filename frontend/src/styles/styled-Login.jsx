import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 90%;
        background-color: #99a3dbd8;
        border: 1px solid gray;
        border-radius: 12px;
        height: 12rem;
        width: 16rem;
    }

    section {
        display: flex;
        gap: 8px;
        margin-bottom: 3%;
    }

    label {
        display: flex;
        align-self: center;
    }

    input {
        width: 10rem;
        height: 1.6rem;
        border-radius: 8px;
    }

    p    {
        display: flex;
        align-self: center;
        width: 1rem;
        font-size: 0.9rem;
        margin-left: -2.5rem;
        margin-right: 1.5rem;
    }

    button {
        display: flex;
        align-self: flex-end;
        padding: 8px;
        margin-right: 10%;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background: black;
        color: #fefefe;
    }

    button:hover {
        transform: scale(1.1);
        background: gray;
    }
`
