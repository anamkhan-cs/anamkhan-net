import { Container } from "reactstrap";
import { container, header } from "./Skills.module.scss";
const Skills = () => {
  return (
    <Container fluid className={container}>
      <div>
        <h1 className={header}>Skills</h1>
      </div>
    </Container>
  );
};

export default Skills;
