import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4.5%;
    
    .busca {
        display: flex;
        justify-content: center;
        gap: 1rem;
        font-size: 1.2rem;
        margin-left: 10%;
        margin-bottom: 5%;
       
        span {
            display: flex;
            gap: 0.6rem;

            label {
                display: flex;
                align-items: center;
                color: #fefefe;
            }

            input {
                font-size: 1.1rem;
                border-radius: 10px;
                background-color: #e9e3e3;
            }

            select {
                border-radius: 10px;
                background-color: #e9e3e3;
                font-size: 1.1rem;
            }
        }

        button {
            padding: 8px;
            padding-left: 20px;
            padding-right: 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            background: black;
            color: #fefefe;
            font-size: 1.1rem;
        }

        button:hover {
            transform: scale(1.1);
            background: gray;
        }
    }

    .banner {
        width: 90%;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    .empty {
        display: none;
    }

    .render {
    background-color: #3d2424a9;
    color: #d1d1d1;
    padding-bottom: 5%;
    border-radius: 15px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    margin-right: 2%;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

        form {
        display: flex;
        justify-content: space-between;
        width: 88%;
        align-items: center;
        margin-top: 5%;

            span {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }

            aside {
                display: flex;
                justify-content: flex-end;
                
            }
        }
    }


`