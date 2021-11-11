import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import Spacer from "../../components/Spacer";
import Curso from "../../components/Curso";

const Home = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    axios
      .get("https://flashcard-api-mayck.herokuapp.com/api/colecoes")
      .then(({ data }) => {
        setCursos(data);
      });
  }, []);

  return (
    <Container>
      <div id="content">
        <h1>Cursos</h1>
        <Spacer />
        <div className="cursos">
          {cursos.map((curso) => {
            return (
              <Curso
                key={curso.colecaoId}
                nome={curso.nome}
                descricao={curso.descricao}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Home;
