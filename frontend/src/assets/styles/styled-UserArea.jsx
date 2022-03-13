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
        background-color: #493131a9;
        border-radius: 14px;
        width: 700px;
        height: 780px;

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

        span {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            margin-top: 2%;

            button {
                padding: 0.7rem;
                border-radius: 10px;
                border-color: #312c2b;
                width: 25%;
                font-size: 1.06rem;
                color: #312c2b;
                background: #c49231;
                cursor: pointer;
            }

            button:hover {
                transform: scale(1.1);
                color: #fefefe;
            }

            img {
                width: 20%;
                transform: scaleX(-1);
            }
        }

    }
`