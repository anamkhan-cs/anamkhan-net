import { Container } from "reactstrap";
import {
  container,
  header,
  contentContainer,
  icons,
} from "./Experience.module.scss";
import { TiLocation } from "react-icons/ti";

const Experience = () => {
  return (
    <Container fluid className={container}>
      <div>
        <h1 className={header}>Education</h1>
      </div>
      <div className={contentContainer}>
        <>
          <div className="d-flex justify-content-between align-items-center">
            <span> Master of Science</span>
            <span>
              |
              <a
                href="https://goo.gl/maps/7P2CoU66CrHgRoC36"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <TiLocation /> Northwestern University
              </a>
              | Aug 2019 - Dec 2020{" "}
            </span>
          </div>
          <div className="ml-4">Computer Science - GPA: 3.8</div>
        </>
        <>
          <div className="d-flex justify-content-between align-items-center">
            <span>Bachelor of Engineering</span>
            <span>
              |
              <a
                href="https://goo.gl/maps/Bq9Wvbcbp9BQGWmg8"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <TiLocation /> Visvesvaraya Technological University
              </a>
              | Aug 2015 - May 2019
            </span>
          </div>
          <div className="ml-4">Computer Science - GPA: 3.5</div>
        </>
      </div>
      <div>
        <h1 className={header}>Experience</h1>
      </div>
    </Container>
  );
};

export default Experience;
