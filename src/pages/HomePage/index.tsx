import AdvancedStatistics from "../../components/advancedStatistics";
import Conteudo from "../../components/conteudo";
import FooterBar from "../../components/footer";
import LinkShorter from "../../components/linkShorter";
import NavBar from "../../components/navBar";
import { Container, DivCinza } from "../../components/styles/styles";

function HomePage() {
  return (
    <Container>
      <NavBar />
      <Conteudo />
      <DivCinza>
      <LinkShorter />
      <AdvancedStatistics/>
      </DivCinza>
      <FooterBar/>
    </Container>
  );
}

export default HomePage;
