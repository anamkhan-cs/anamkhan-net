import { Container } from "reactstrap";
import { FaPython } from "react-icons/fa";
import {
  DiJavascript1,
  DiJava,
  DiCss3,
  DiDjango,
  DiNodejsSmall,
  DiBootstrap,
  DiScrum,
  DiNpm,
} from "react-icons/di";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCplusplus,
  SiC,
  SiJest,
  SiTensorflow,
  SiArduino,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaJira, FaDocker } from "react-icons/fa";

import {
  container,
  header,
  containerAll,
  subheading,
  icons,
} from "./Skills.module.scss";

const Skills = () => {
  return (
    <Container fluid className={container}>
      <div className={containerAll}>
        <div>
          <h1 className={header}>Skills</h1>
        </div>
        <div>
          <span className={subheading}>Languages</span>
          <div className="d-none d-md-flex justify-content-center align-items-center m-3">
            <FaPython className={icons} /> Python
            <DiJavascript1 className={icons} /> Javascript
            <DiJava className={icons} /> Java
            <AiOutlineHtml5 className={icons} /> HTML
          </div>
          <div className="d-none d-md-flex justify-content-center align-items-center m-3">
            <DiCss3 className={icons} /> CSS
            <SiC className={icons} /> C
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="60"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              className={icons}
            >
              <path
                style={{ fill: "#ffddd2" }}
                d="M12 0a11.95 11.95 0 0 0-4.104.721c4.872 2.556 11.316 10.893 13.547 18.686A11.957 11.957 0 0 0 24 12c0-6.627-5.373-12-12-12zM4.093 2.974A11.971 11.971 0 0 0 0 12c0 3.026 1.12 5.789 2.968 7.9 1.629-4.894 4.691-9.611 7.313-12.246-1.872-2.016-3.968-3.618-6.188-4.68zm2.276 19.625A11.947 11.947 0 0 0 12 24c2.092 0 4.059-.536 5.772-1.478-.987-4.561-2.851-8.739-5.28-12.147-2.597 2.8-5.186 7.702-6.123 12.224z"
              />
            </svg>
            Racket
            <SiCplusplus id="cplusplus" className={icons} /> C++
          </div>
        </div>
        <div className="d-block d-md-none">
          <ul>
            <li>
              <FaPython className={icons} /> Python
            </li>
            <li>
              <DiJavascript1 className={icons} /> Javascript
            </li>
            <li>
              <DiJava className={icons} /> Java
            </li>
            <li>
              <AiOutlineHtml5 className={icons} /> HTML
            </li>
            <li>
              <DiCss3 className={icons} /> CSS
            </li>
            <li>
              <SiC className={icons} /> C
            </li>
            <li>
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
                className={icons}
              >
                <path
                  style={{ fill: "#ffddd2" }}
                  d="M12 0a11.95 11.95 0 0 0-4.104.721c4.872 2.556 11.316 10.893 13.547 18.686A11.957 11.957 0 0 0 24 12c0-6.627-5.373-12-12-12zM4.093 2.974A11.971 11.971 0 0 0 0 12c0 3.026 1.12 5.789 2.968 7.9 1.629-4.894 4.691-9.611 7.313-12.246-1.872-2.016-3.968-3.618-6.188-4.68zm2.276 19.625A11.947 11.947 0 0 0 12 24c2.092 0 4.059-.536 5.772-1.478-.987-4.561-2.851-8.739-5.28-12.147-2.597 2.8-5.186 7.702-6.123 12.224z"
                />
              </svg>{" "}
              Racket
            </li>
            <li>
              <SiCplusplus id="cplusplus" className={icons} /> C++
            </li>
          </ul>
        </div>

        <div>
          <span className={subheading}>Libraries/Frameworks (select)</span>
          <div className="d-none d-md-flex justify-content-center align-items-center m-3">
            <GrReactjs className={icons} /> React
            <DiBootstrap className={icons} /> Bootstrap
            <SiJest className={icons} /> Jest
          </div>
          <div className="d-none d-md-flex justify-content-center align-items-center m-3">
            <DiNodejsSmall className={icons} /> Node.js
            <DiDjango className={icons} /> Django
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className={icons}
            >
              <path
                style={{ fill: "#ffddd2" }}
                d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
              />
            </svg>
            Express
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              className={icons}
            >
              <path
                style={{ fill: "#ffddd2" }}
                d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 12 12c6.633 0 12-5.367 12-12-.001-6.633-5.412-12-12.002-12zM6.37 14.575c.392.523.916.742 1.657.742.35 0 .699-.044 1.004-.175.306-.13.655-.306 1.09-.567l1.223 1.745c-1.003.83-2.138 1.222-3.447 1.222-1.048 0-1.92-.218-2.705-.654a4.393 4.393 0 0 1-1.746-1.92c-.392-.83-.611-1.79-.611-2.925 0-1.09.219-2.094.61-2.923a4.623 4.623 0 0 1 1.748-2.007c.741-.48 1.657-.698 2.661-.698.699 0 1.353.087 1.877.305a5.64 5.64 0 0 1 1.614.96l-1.222 1.658A4.786 4.786 0 0 0 9.12 8.77c-.305-.13-.698-.174-1.048-.174-1.483 0-2.225 1.134-2.225 3.446-.043 1.18.175 2.008.524 2.532H6.37zm12 2.705c-.436 1.353-1.091 2.357-2.008 3.098-.916.743-2.138 1.135-3.665 1.266l-.305-2.05c1.003-.132 1.745-.35 2.225-.7.174-.13.524-.523.524-.523L11.519 6.764h3.01l2.095 8.683 2.226-8.683h2.923L18.37 17.28z"
              />
            </svg>
            Cypress
          </div>
          <div className="d-block d-md-none">
            <ul>
              <li>
                <GrReactjs className={icons} /> React
              </li>
              <li>
                <DiBootstrap className={icons} /> Bootstrap
              </li>
              <li>
                <SiJest className={icons} /> Jest
              </li>
              <li>
                <DiNodejsSmall className={icons} /> Node.js
              </li>
              <li>
                <DiDjango className={icons} /> Django
              </li>
              <li>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  className={icons}
                >
                  <path
                    style={{ fill: "#ffddd2" }}
                    d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
                  />
                </svg>
                Express
              </li>
              <li>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width="10"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                  className={icons}
                >
                  <path
                    style={{ fill: "#ffddd2" }}
                    d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 12 12c6.633 0 12-5.367 12-12-.001-6.633-5.412-12-12.002-12zM6.37 14.575c.392.523.916.742 1.657.742.35 0 .699-.044 1.004-.175.306-.13.655-.306 1.09-.567l1.223 1.745c-1.003.83-2.138 1.222-3.447 1.222-1.048 0-1.92-.218-2.705-.654a4.393 4.393 0 0 1-1.746-1.92c-.392-.83-.611-1.79-.611-2.925 0-1.09.219-2.094.61-2.923a4.623 4.623 0 0 1 1.748-2.007c.741-.48 1.657-.698 2.661-.698.699 0 1.353.087 1.877.305a5.64 5.64 0 0 1 1.614.96l-1.222 1.658A4.786 4.786 0 0 0 9.12 8.77c-.305-.13-.698-.174-1.048-.174-1.483 0-2.225 1.134-2.225 3.446-.043 1.18.175 2.008.524 2.532H6.37zm12 2.705c-.436 1.353-1.091 2.357-2.008 3.098-.916.743-2.138 1.135-3.665 1.266l-.305-2.05c1.003-.132 1.745-.35 2.225-.7.174-.13.524-.523.524-.523L11.519 6.764h3.01l2.095 8.683 2.226-8.683h2.923L18.37 17.28z"
                  />
                </svg>
                Cypress
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className={subheading}>Other</span>
          <div className="d-none d-md-flex justify-content-center align-items-center m-3">
            <AiFillGithub className={icons} /> Git
            <FaJira className={icons} /> Jira
            <DiScrum className={icons} /> Scrum/Agile
            <DiNpm className={icons} /> Npm
          </div>
          <div className="d-none d-md-flex justify-content-center align-items-center m-3">
            <FaDocker className={icons} /> Docker
            <SiTensorflow className={icons} /> Tensorflow
            <SiArduino className={icons} /> Arduino
          </div>
          <div className="d-block d-md-none">
            <ul>
              <li>
                <AiFillGithub className={icons} /> Git
              </li>
              <li>
                <FaJira className={icons} /> Jira
              </li>
              <li>
                <DiScrum className={icons} /> Scrum/Agile
              </li>
              <li>
                <DiNpm className={icons} /> Npm
              </li>
              <li>
                <FaDocker className={icons} /> Docker
              </li>
              <li>
                <SiTensorflow className={icons} /> Tensorflow
              </li>
              <li>
                <SiArduino className={icons} /> Arduino
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
