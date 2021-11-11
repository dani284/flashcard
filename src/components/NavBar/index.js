import { Container, Bar } from "./styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <Bar>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/cursos">
          Cursos
        </Link>
        <Link className="link" to="/adicionar">
          Adicionar curso
        </Link>
      </Bar>
    </Container>
  );
};

export default NavBar;
