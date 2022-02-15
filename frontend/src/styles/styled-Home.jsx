import styled from 'styled-components'

export const Form = styled.form`
    margin-top: 1rem;
    display: flex;
    align-items: center;

    span {
        display: flex;
        gap: 8px;
        margin-right: 10px;
    }

    label {
        display: flex;
        align-self: center;
    }

    input {
        width: 10rem;
        height: 1.4rem;
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
        width: 5rem;
        padding: 6px;
        background: black;
        color: #fefefe;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    button:hover {
        transform: scale(1.1);
        background: gray;
    }
`
