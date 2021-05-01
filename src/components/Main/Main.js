import { Container } from "reactstrap";
import { home, content, name, about } from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <Container fluid className={home}>
        <div className={content}>
          <div className={name}>Anam</div>
          <div className={name}>Khan</div>
          <div className={about}>
            Full stack software engineer, lover of cats and movies, especially
            when it's movies about cats
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
