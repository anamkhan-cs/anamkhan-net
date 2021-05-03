import { Container } from "reactstrap";
import { container, header } from "./Projects.module.scss";

const Projects = () => {
  return (
    <Container fluid className={container}>
      <div>
        <h1 className={header}>Projects</h1>
      </div>
    </Container>
  );
};

export default Projects;
