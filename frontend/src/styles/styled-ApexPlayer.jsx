import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    
    .busca {
        display: flex;
        justify-content: center;
    }

    .banner {
        width: 50%;
        border-radius: 12px;
    }


    .render {
    display: flex;
    flex-direction: column;

        form {
        display: flex;
        justify-content: space-between;
        width: 50%;
        align-items: center;

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