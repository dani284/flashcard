import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "./styles";
import Spacer from "../../components/Spacer";

import axios from "axios";

const Adicionar = ({ editar }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [privacidade, setPrivacidade] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  function dados() {
    axios
      .get(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`)
      .then(({ data }) => {
        setNome(data.nome);
        setDescricao(data.descricao);
        setPrivacidade(data.publico);
      });
  }

  useEffect(() => {
    editar && dados();
  }, []);

  function submit(e) {
    e.preventDefault();

    if (editar) {
      axios
        .put(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`, {
          nome,
          descricao,
          publico: privacidade,
        })
        .finally(() => {
          navigate("/cursos");
        });
      return;
    }

    axios
      .post("https://flashcard-api-mayck.herokuapp.com/api/colecoes", {
        nome,
        descricao,
        publico: privacidade,
      })
      .finally(() => {
        navigate("/");
      });
  }

  return (
    <Container>
      <form id="content" onSubmit={submit}>
        <h1>{editar ? "Editar curso" : "Cadastrar curso"}</h1>
        <Spacer />
        <label>Nome:</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="text"
          type="text"
        />
        <label>Descricao:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="text"
          style={{ resize: "none" }}
        />
        <label>Privacidade</label>
        <div style={{ margin: "2rem 0 2rem 0", padding: "1rem" }}>
          <label style={{ fontWeight: "normal" }} htmlFor="publico">
            Público
          </label>
          <input
            onChange={() => setPrivacidade(true)}
            id="publico"
            checked={privacidade}
            className="radioButton"
            type="radio"
          />
          <label style={{ fontWeight: "normal" }} htmlFor="privado">
            Privado
          </label>
          <input
            onChange={() => setPrivacidade(false)}
            id="privado"
            checked={!privacidade}
            className="radioButton"
            type="radio"
          />
        </div>
        <input
          className="sendButton"
          type="submit"
          value={editar ? "Salvar" : "Cadastrar"}
        />
      </form>
    </Container>
  );
};

export default Adicionar;
