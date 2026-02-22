import styled from "styled-components";
import {UserAuth, BtnCirucular} from "../../index";

export function DataUser() {

    const {user} = UserAuth();

  return (
    <Container>
        <div className="imgContainer">
            <img src={user.picture} alt="imagen-de-perfil-usuario" />
        </div>
        <div className="btnCircularContainer">
            <BtnCirucular/>
        </div>
    </Container>);
}
const Container =styled.div`
  
`