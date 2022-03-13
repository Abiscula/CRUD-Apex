import styled from "styled-components";
import img from '../img/header.jpg'

export const Container = styled.header`
    display: flex;
    height: 240px;
    background-image: url(${img});
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    div {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 5px;

        nav {
            display: flex;
            gap: 5rem;
            width: 45%;
            margin-right: 4%;
            margin-top: 1%;
        }

        span {
            color: #fefefe;
            height: 10%;
            padding: 2px;
            font-size: 1.6rem;
            cursor: pointer;
        }

        span:hover {
            text-decoration: underline;
            background-color: gray;
            border-radius: 10px;
        }

        section {
            display: flex;
            margin-top: 1%;

            svg {
                cursor: pointer;
            }

            a {
                height: 2rem;
                font-size: 1.6rem;
                color: #fefefe;
                cursor: pointer;
                margin-left: 40px;
            }
        }
    }



`