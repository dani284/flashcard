import Spacer from "../Spacer";
import { Container } from "./styles";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Curso = ({ id, nome, descricao }) => {
  const navigate = useNavigate();

  function editar() {
    navigate(`/editar/${id}`);
  }

  function remover() {
    axios
      .delete(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`)
      .then(() => {
        window.location.reload();
      });
  }

  return (
    <Container>
      <h1>{nome}</h1>
      <Spacer />
      <p>{descricao}</p>
      <Spacer />
      <div className="botoesDiv">
        <button onClick={editar}>Editar</button>
        <button onClick={remover}>Remover</button>
      </div>
    </Container>
  );
};

export default Curso;
