import styled from "styled-components";
import { useAuthStore, UserAuth } from "../index";
export function Home() {
    const { signout } = useAuthStore();
    return (
        <Container>
            <h1>Bienvenido Home</h1>
            <button onClick={signout}>Cerrar</button>
        </Container>
    );
}
const Container = styled.div`
  height: 100vh;
`;