//esto lo que hace es pasarle propiedades de los themes.jsx al botonSave
import styled from "styled-components";

export const Icono = styled.span`
    color:${(props) => props.theme.text}
`