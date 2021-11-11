import Spacer from "../Spacer";
import { Container } from "./styles";

const Curso = ({ nome, descricao }) => {
  return (
    <Container>
      <h1>{nome}</h1>
      <Spacer />
      <p>{descricao}</p>
    </Container>
  );
};

export default Curso;
