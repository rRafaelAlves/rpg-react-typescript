import styled from "styled-components";

export const Container = styled.div`
position: relative;
background-color: #24282f;
min-height: 100vh;
color: #fff;

`

export const Map = styled.div`
width: 480px;
height: 480px;
background-image: url('/assets/map.png');
background-size: 100%;
background-position: left top;
`

export const MessageController = styled.div`
width: 76px;
height: 38px;
position: absolute;
background-color: transparent;
left: 30px;
top: 430px;
border: 1px solid black;
font-size: 9px;
text-shadow: 2px 2px 2px black;
text-align: center;

.commandMsg{
    color: red;
    font-size: 11px;
}

`