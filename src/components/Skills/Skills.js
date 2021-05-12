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
  DiEclipse,
  DiNetbeans,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCplusplus,
  SiC,
  SiJest,
  SiTensorflow,
  SiArduino,
  SiVisualstudiocode,
  SiXcode,
  SiFirebase,
} from "react-icons/si";
import { GiAtom } from "react-icons/gi";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { FaJira, FaDocker } from "react-icons/fa";

import { header, subheading, icons } from "./Skills.module.scss";
import { container, containerAll } from "../CommonStyles.module.scss";
import NavbarMenu from "../../Navbar/Navbar";

const Skills = () => {
  return (
    <Container fluid className={container}>
      <NavbarMenu />
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
          <span className={subheading}>Databases</span>
          <div className="d-none d-md-flex justify-content-center align-items-center m-3">
            <DiMongodb className={icons} /> MongoDB
            <SiFirebase className={icons} /> Firebase
            <GrMysql className={icons} /> MySQL
            <DiPostgresql className={icons} /> PostgreSQL
          </div>
          <div className="d-block d-md-none">
            <ul>
              <li>
                <DiMongodb className={icons} /> MongoDB
              </li>
              <li>
                <SiFirebase className={icons} /> Firebase
              </li>
              <li>
                <GrMysql className={icons} /> MySQL
              </li>
              <li>
                <DiPostgresql className={icons} /> PostgreSQL
              </li>
            </ul>
          </div>

          <div>
            <span className={subheading}>Libraries/Frameworks (select)</span>
            <div className="d-none d-md-flex justify-content-center align-items-center m-3">
              <GrReactjs className={icons} /> React
              <DiBootstrap className={icons} /> Bootstrap
              <SiJest className={icons} /> Jest
              <DiNodejsSmall className={icons} /> Node.js
            </div>
            <div className="d-none d-md-flex justify-content-center align-items-center m-3">
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
            <span className={subheading}>IDEs</span>
            <div className="d-none d-md-flex justify-content-center align-items-center m-3">
              <SiVisualstudiocode className={icons} /> Visual Studio Code
              <GiAtom className={icons} /> Atom
              <DiEclipse className={icons} /> Eclipse
              <DiNetbeans className={icons} /> NetBeans
            </div>
            <div className="d-none d-md-flex justify-content-center align-items-center m-3">
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
                  d="M7.833 6.666v-.055c0-1-.667-1.5-1.778-1.5H4.389v3.055h1.723c1.111 0 1.721-.666 1.721-1.5zM0 0v24h24V0H0zm2.223 3.167h4c2.389 0 3.833 1.389 3.833 3.445v.055c0 2.278-1.778 3.5-4.001 3.5H4.389v2.945H2.223V3.167zM11.277 21h-9v-1.5h9V21zm4.779-7.777c-2.944.055-5.111-2.223-5.111-5.057C10.944 5.333 13.056 3 16.111 3c1.889 0 3 .611 3.944 1.556l-1.389 1.61c-.778-.722-1.556-1.111-2.556-1.111-1.658 0-2.873 1.375-2.887 3.084.014 1.709 1.174 3.083 2.887 3.083 1.111 0 1.833-.445 2.61-1.167l1.39 1.389c-.999 1.112-2.166 1.779-4.054 1.779z"
                />
              </svg>
              PyCharm
              <SiXcode className={icons} /> XCode
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
                  d="M17.383.3s-.717 1.14-1.798 2.931l-6.274-.035a73.417 73.417 0 0 0-.353-2.74L8.05.59c.138.936.248 1.804.337 2.6h-.02a.524.524 0 0 0-.412.198l-4.377 5.48c-2.193.054-3.49-.07-3.49-.07L0 9.714s1.212.116 3.27.08l1.434 6.47c-1.812 1.535-3.169 2.362-3.169 2.362l.477.784s1.281-.779 3.024-2.225a.5.5 0 0 0 .086.053l6.6 3.249c-.01 2.007.058 3.214.058 3.214l.917-.052s-.07-1.265-.056-3.356l6.218-2.978a.526.526 0 0 0 .215-.19l.245.243c1.149 1.118 1.93 1.598 1.93 1.598l.477-.784s-.67-.406-1.767-1.472a18.93 18.93 0 0 1-.612-.623l1.422-6.16A116.35 116.35 0 0 1 24 8.718l-.306-.866s-1.224.434-3.162 1.183l-4.166-5.322A200.58 200.58 0 0 1 18.16.79zM9.419 4.256l5.532.032c-.586.981-1.237 2.09-1.932 3.297l-3.368.597a52.326 52.326 0 0 0-.232-3.926zm-.91.13c.192 2.06.225 3.46.23 4.087a52.221 52.221 0 0 1-3.766.339zm7.276.294l3.343 4.27a1.83 1.83 0 0 0-.656.086c-.451.14-.857.405-1.22.768-.24.24-.435.498-.582.776-.378.156-.765.317-1.165.485l-1.64-3.109c.692-1.2 1.34-2.304 1.92-3.276zm-2.666 3.824l1.68 3.184-.75.783a1.09 1.09 0 0 1-.122-.102l-1.313-1.313-1.418-1.417a2.9 2.9 0 0 0-.943-.627zM6.984 9.586l-.05.048-2.147 2.147-.448-2.02c.795-.032 1.68-.087 2.645-.175zm2.418.958c.22.051.418.158.576.313l1.312 1.313 1.418 1.418c.046.047.094.09.143.134l-.534.557-3.214-1.582zm-.938.091l-.31 2.247c-.86.98-1.732 1.847-2.549 2.59l-.465-2.1.247.247 2.766-2.766a1.17 1.17 0 0 1 .311-.218zm7.934 1.05l.004.038-.232.232-.087-.137zm2.724.696l-.634 2.743c-.42-.5-.873-1.071-1.334-1.715l.502-.503c.22.009.437-.028.625-.086.3-.093.58-.243.841-.439zm-3.747.033l.1.159a1.29 1.29 0 0 1-.374.126zM8.78 13.563l3.136 1.544a88.99 88.99 0 0 0-.178 4.207L5.9 16.44a33.523 33.523 0 0 0 2.879-2.877zm7.67.437a27.7 27.7 0 0 0 1.782 2.228l-.054.237-5.521 2.644c.025-1.18.078-2.547.18-4.047l.813-.85a3.159 3.159 0 0 0 2.8-.212z"
                />
              </svg>
              Spyder
            </div>
            <div className="d-block d-md-none">
              <ul>
                <li>
                  <SiVisualstudiocode className={icons} /> Visual Studio Code
                </li>
                <li>
                  <GiAtom className={icons} /> Atom
                </li>
                <li>
                  <DiNetbeans className={icons} /> Eclipse
                </li>
                <li>
                  <DiNpm className={icons} /> NetBeans
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
                      d="M7.833 6.666v-.055c0-1-.667-1.5-1.778-1.5H4.389v3.055h1.723c1.111 0 1.721-.666 1.721-1.5zM0 0v24h24V0H0zm2.223 3.167h4c2.389 0 3.833 1.389 3.833 3.445v.055c0 2.278-1.778 3.5-4.001 3.5H4.389v2.945H2.223V3.167zM11.277 21h-9v-1.5h9V21zm4.779-7.777c-2.944.055-5.111-2.223-5.111-5.057C10.944 5.333 13.056 3 16.111 3c1.889 0 3 .611 3.944 1.556l-1.389 1.61c-.778-.722-1.556-1.111-2.556-1.111-1.658 0-2.873 1.375-2.887 3.084.014 1.709 1.174 3.083 2.887 3.083 1.111 0 1.833-.445 2.61-1.167l1.39 1.389c-.999 1.112-2.166 1.779-4.054 1.779z"
                    />
                  </svg>{" "}
                  PyCharm
                </li>
                <li>
                  <SiXcode className={icons} /> XCode
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
                      d="M17.383.3s-.717 1.14-1.798 2.931l-6.274-.035a73.417 73.417 0 0 0-.353-2.74L8.05.59c.138.936.248 1.804.337 2.6h-.02a.524.524 0 0 0-.412.198l-4.377 5.48c-2.193.054-3.49-.07-3.49-.07L0 9.714s1.212.116 3.27.08l1.434 6.47c-1.812 1.535-3.169 2.362-3.169 2.362l.477.784s1.281-.779 3.024-2.225a.5.5 0 0 0 .086.053l6.6 3.249c-.01 2.007.058 3.214.058 3.214l.917-.052s-.07-1.265-.056-3.356l6.218-2.978a.526.526 0 0 0 .215-.19l.245.243c1.149 1.118 1.93 1.598 1.93 1.598l.477-.784s-.67-.406-1.767-1.472a18.93 18.93 0 0 1-.612-.623l1.422-6.16A116.35 116.35 0 0 1 24 8.718l-.306-.866s-1.224.434-3.162 1.183l-4.166-5.322A200.58 200.58 0 0 1 18.16.79zM9.419 4.256l5.532.032c-.586.981-1.237 2.09-1.932 3.297l-3.368.597a52.326 52.326 0 0 0-.232-3.926zm-.91.13c.192 2.06.225 3.46.23 4.087a52.221 52.221 0 0 1-3.766.339zm7.276.294l3.343 4.27a1.83 1.83 0 0 0-.656.086c-.451.14-.857.405-1.22.768-.24.24-.435.498-.582.776-.378.156-.765.317-1.165.485l-1.64-3.109c.692-1.2 1.34-2.304 1.92-3.276zm-2.666 3.824l1.68 3.184-.75.783a1.09 1.09 0 0 1-.122-.102l-1.313-1.313-1.418-1.417a2.9 2.9 0 0 0-.943-.627zM6.984 9.586l-.05.048-2.147 2.147-.448-2.02c.795-.032 1.68-.087 2.645-.175zm2.418.958c.22.051.418.158.576.313l1.312 1.313 1.418 1.418c.046.047.094.09.143.134l-.534.557-3.214-1.582zm-.938.091l-.31 2.247c-.86.98-1.732 1.847-2.549 2.59l-.465-2.1.247.247 2.766-2.766a1.17 1.17 0 0 1 .311-.218zm7.934 1.05l.004.038-.232.232-.087-.137zm2.724.696l-.634 2.743c-.42-.5-.873-1.071-1.334-1.715l.502-.503c.22.009.437-.028.625-.086.3-.093.58-.243.841-.439zm-3.747.033l.1.159a1.29 1.29 0 0 1-.374.126zM8.78 13.563l3.136 1.544a88.99 88.99 0 0 0-.178 4.207L5.9 16.44a33.523 33.523 0 0 0 2.879-2.877zm7.67.437a27.7 27.7 0 0 0 1.782 2.228l-.054.237-5.521 2.644c.025-1.18.078-2.547.18-4.047l.813-.85a3.159 3.159 0 0 0 2.8-.212z"
                    />
                  </svg>
                  Spyder
                </li>
              </ul>
            </div>
          </div>
          <div>
            <span className={subheading}>Miscellaneous</span>
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
      </div>
    </Container>
  );
};

export default Skills;
