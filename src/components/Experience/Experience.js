import { Container } from "reactstrap";
import { header, contentContainer, icons } from "./Experience.module.scss";
import { container, containerAll } from "../CommonStyles.module.scss";
import { TiLocation } from "react-icons/ti";

import NavbarMenu from "../../Navbar/Navbar";

const Experience = () => {
  return (
    <Container fluid className={container}>
      <NavbarMenu />
      <div className={containerAll}>
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
            Relevant Coursework: Agile Software Development, Computer
            Networking, Human Computer Interaction, Algorithms, Data Structures,
            Computer Architecture, Object Oriented Programming, Software
            Engineering, Databases, Operating Systems, Machine Learning,
            Distributed Systems, Deep Learning,
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
              Part of the editing technology team, with daily scrum and sprints
              focusing on agile methodologies
              <ul>
                <li>
                  Developing new features, streamlining the UI and refactoring
                  existing code. Replacing a legacy tool used to manage articles
                  and it's relevant data hosted on their website. App built with
                  Reactjs, styling done using reactstrap, bootstrap, unit
                  testing through Jest
                </li>
                <li>
                  Python application to facilitate creation of multiple assets
                  in batches by reading a .csv file, increasing efficiency,
                  productivity and reducing time
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-3">
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
                <li>
                  Tutoring Northwestern's student athletes in undergraduate
                  courses in Computer Science - Intro to Computer Programming,
                  Fundamentals of Computer Programming, Intro to Computer
                  Systems
                </li>
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
                  Built a Chatbot to parse user input and perform an intelligent
                  search for Homes.com, streamlining their user experience by
                  20%. Used Google Dialogflow for NLP, Angular5/6 to build a
                  mock site and a Firebase database
                </li>
                <li>
                  Analysing brain waves with a wearable device, Emotiv, we were
                  able to identify patterns of aggressive behavior, and develop
                  methods of intrusion to combat that. Research done for
                  patients with dementia
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
                  Enhanced their internal scheduler by implementing a to-do list
                  tool and minutes of meeting tracker. Worked with HTML/CSS,
                  Javascript, Bootstrap with a MongoDB database
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a
              href="https://goo.gl/maps/6iMhQdpMaMBYPcPFA"
              target="_blank"
              rel="noreferrer"
              className={icons}
            >
              <TiLocation /> ITC Infotech
            </a>
            <div className="d-flex justify-content-between align-items-center">
              <span>Cyber Security Intern</span>
              <span>| Mar 2018 - May 2018</span>
            </div>
            <div>
              <ul>
                <li>
                  Ethical hacking and cyber security through the Kali Linux
                  platform
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className={header}>Involvement</h1>
        </div>
        <div className={contentContainer}>
          <div className="d-flex justify-content-between align-items-center">
            <span>SWE (Society of Women Engineers)</span>
            <span>| Aug 2019 - Present </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Developer Student Club (a Google Initiative)</span>
            <span>| Aug 2016 - March 2019 </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
