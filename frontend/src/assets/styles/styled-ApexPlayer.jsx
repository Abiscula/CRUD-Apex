import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
    
    .busca {
        display: flex;
        justify-content: center;
        gap: 1rem;
        font-size: 1.2rem;
       
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
        width: 50%;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }


    .render {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 10%;
    font-size: 1.2rem;

        form {
        display: flex;
        justify-content: space-between;
        width: 49%;
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