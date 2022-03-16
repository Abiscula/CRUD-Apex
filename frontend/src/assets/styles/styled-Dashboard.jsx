import styled from "styled-components";
import img from '../img/header.jpg'

export const Container = styled.main`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    color: #e7dada;
    

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url(${img});
        border-radius: 14px;
        width: 400px;
        margin-top: 5%;

        span {
            display: flex;
            flex-direction: column;
            margin-top: 8%;
            margin-bottom: 8%;

            h2 {
                margin-bottom: 5%;
            }
            
            h3 {
                margin-bottom: 5%;
            }
        }

        span:last-child {
            display: flex;
            flex-direction: column;

        }
    }
`