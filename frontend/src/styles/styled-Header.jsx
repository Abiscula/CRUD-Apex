import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 30vh;
    background-color: #6b72b1;
    justify-content: space-around;

    nav {
        display: flex;
        justify-content: space-around;
        width: 45%;
        margin-top: 1%;
        margin-right: 4%;
    }

    span {
        color: #fefefe;
        height: 10%;
        padding: 2px;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 5px;
    }

    span:hover {
        text-decoration: underline;
        background-color: gray;
        border-radius: 10px;
    }
`