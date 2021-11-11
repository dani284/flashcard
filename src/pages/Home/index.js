import { Container } from "./styles";
import bonequinha from "../../assets/bonequinha.jpg";

const Home = () => {
  return (
    <Container>
      <h1>Essa eh a minha Home</h1>
      <img alt="Bonequinha" src={bonequinha} />
    </Container>
  );
};

export default Home;
