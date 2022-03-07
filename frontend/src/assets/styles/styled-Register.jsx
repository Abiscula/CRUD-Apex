import styled from 'styled-components'
import img from '../img/header.jpg'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 4%;


    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #3d2424a9;
        border-radius: 14px;
        width: 700px;
        height: 750px;

        div {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin: 1.5%;

            label {
                font-size: 1.2rem;
                padding: 10px 0px 5px 0px;
                color: #fefefe;
            }

            input {
                display: flex;
                align-self: center;
                width: 100%;
                padding: 8px;
                border-radius: 8px;
                font-size: 1rem;
            }
        }

        button {
            margin-top: 8%;
            padding: 0.7rem;
            border-radius: 10px;
            width: 25%;
            font-size: 1.05rem;
            /* border: none; */
            color: #fefefe;
            background-image: url(${img});
            cursor: pointer;
        }

        button:hover {
            transform: scale(1.1);
        }

    }
`