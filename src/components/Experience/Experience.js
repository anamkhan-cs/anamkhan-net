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
            <span>
              Master of Science |
              <a
                href="https://goo.gl/maps/7P2CoU66CrHgRoC36"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <TiLocation /> Northwestern University
              </a>
            </span>
            <span>| Aug 2019 - Dec 2020 </span>
          </div>
          <div className="ml-4">Computer Science - GPA: 3.8</div>
        </>
        <>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              Bachelor of Engineering |
              <a
                href="https://goo.gl/maps/Bq9Wvbcbp9BQGWmg8"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <TiLocation /> Visvesvaraya Technological University
              </a>
            </span>
            <span>| Aug 2015 - May 2019</span>
          </div>
          <div className="ml-4">Computer Science - GPA: 3.5</div>
        </>
        <p className="mt-1">
          Relevant Coursework: Agile Software Development, Programming in AI,
          Machine Learning, Distributed Systems, Deep Learning, Computer
          Networking, Human Computer Interaction, Algorithms, Data Structures,
          Computer Architecture, Object Oriented Programming, Software
          Engineering, Databases, Operating Systems
        </p>
      </div>

      <div>
        <h1 className={header}>Experience</h1>
      </div>
      <div className={contentContainer}>
        <div>
          <a
            href="https://goo.gl/maps/oTzfkad9vprLLqzb8"
            target="_blank"
            rel="noreferrer"
            className={icons}
          >
            <TiLocation /> Encyclopedia Britannica, Inc
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <span>Software Engineer</span>
            <span>| Jan 2021 - Present</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Software Engineer Intern</span>
            <span>| Jun 2020 - Dec 2020</span>
          </div>
          <div>
            <ul>
              <li>
                Front end enhancements, refactoring code, bug fixes on an
                internal tool built with React, Bootstrap, Sass and testing with
                Jest
              </li>
              <li>
                Developed a stand alone, batch processing executable project
                using Python, GUI using wxPython
              </li>
            </ul>
          </div>
        </div>

        <div>
          <a
            href="https://goo.gl/maps/7P2CoU66CrHgRoC36"
            target="_blank"
            rel="noreferrer"
            className={icons}
          >
            <TiLocation /> Northwestern University
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <span>N’CAT Student Tutor</span>
            <span>| Oct 2019 - Dec 2020</span>
          </div>
          <div>
            <ul>
              <li>Tutoring undergraduates courses in Computer Science</li>
            </ul>
          </div>
        </div>

        <div>
          <a
            href="https://goo.gl/maps/Pz9vwrBPEox5LmXn7"
            target="_blank"
            rel="noreferrer"
            className={icons}
          >
            <TiLocation /> Old Dominion University
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <span>Software Development and Research Intern</span>
            <span>| Jul 2018 - Aug 2018</span>
          </div>
          <div>
            <ul>
              <li>
                Chatbot parsed user input and searched for homes Used Google
                Dialogflow for NLP, Angular5/6 for frontend and Firebase as the
                database. FAQs implemented by Algolia
              </li>
              <li>
                To find methods of intrusion after detection of aggression
                Worked with Emotiv, to analyze brain waves
              </li>
            </ul>
          </div>
        </div>

        <div>
          <a
            href="https://goo.gl/maps/NhYScvp8QnZPzqEZ6"
            target="_blank"
            rel="noreferrer"
            className={icons}
          >
            <TiLocation /> Telaverge Communications
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <span>Front End Engineering Intern</span>
            <span>| Apr 2018 - May 2018</span>
          </div>
          <div>
            <ul>
              <li>
                Enhanced their scheduler to implement a to-do list and minutes
                of meeting tool Worked with HTML/CSS, Javascript, Bootstrap with
                MongoDB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
