import styled from "styled-components";

export function BtnCirucular(icono,width,height,bgcolor,textColor,fontsize) {
  return (
    <Container bgcolor={bgcolor} textColor={textColor} height={height} width={width} fontsize={fontsize}>
        <span>{icono}</span>
    </Container>);
}
const Container =styled.div`
    background-color: ${(props) => props.theme.bgcolor};
`