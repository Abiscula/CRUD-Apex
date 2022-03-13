import styled from "styled-components";
import bg from '../img/background.jpg'
import userArea from '../img/background-userarea.jpg'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: ${props => props.location.pathname !== '/user' ? '100vh': ''};
    padding-bottom: ${props => props.location.pathname !== '/user' ? '': '10%'};
    background-image: ${props => props.location.pathname !== '/user' ? `url(${bg})` : `url(${userArea})`};
`